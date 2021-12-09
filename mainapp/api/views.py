from rest_framework.views import APIView
from rest_framework.response import Response
from ..utils.fonbet_parser import Parser
from ..models import BlockLog
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
from django.utils.timezone import localtime

parser = Parser()


class LiveEventView(APIView):
    def get(self, request):
        if request.query_params.get('sports') and request.query_params.get('k1'):
            selected_sports = list(map(int, request.query_params.get('sports').split(',')))
            k1 = int(request.query_params.get('k1'))
        elif request.query_params.get('sports') is None:
            return Response(status=400, exception=True)  # 400 bad request response
        else:
            return Response([])

        live_events = {}
        raw_live_events = parser.get_live_events()
        for event_id, event_params in raw_live_events.items():
            if event_params['sport_id'] in selected_sports:
                live_events[event_id] = event_params
        live_events_ids = list(live_events.keys())

        counters = {event_id: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] for event_id in live_events}

        block_logs = BlockLog.objects.all().order_by('-time')
        base_factors = [[921, 3150, 3144],
                        [922, 3152],
                        [923, 3151, 3145],
                        [924],
                        [1571],
                        [925],
                        [927, 937, 1845],
                        [928, 938, 1846],
                        [930, 940, 1848],
                        [931, 941, 1849]]
        last_factors = {event_id: None for event_id in live_events}
        k2_counters = {event_id: 0 for event_id in live_events}
        for log in block_logs:
            if log.event_id in counters:
                if last_factors[log.event_id] is None:  # костыль для оптимального алгоритма
                    last_factors[log.event_id] = log.factor
                    k2_counters[log.event_id] += 1
                elif log.factor == last_factors[log.event_id]:
                    k2_counters[log.event_id] += 1
                else:
                    last_factors[log.event_id] = False  # factors chain is over

                for factor_group_index in range(10):
                    if log.factor in base_factors[factor_group_index]:
                        counters[log.event_id][factor_group_index] += 1
                counters[log.event_id][10] += 1
        for log in reversed(block_logs):
            event_id = log.event_id
            if event_id in live_events_ids:
                live_events_ids.remove(event_id)
                live_events_ids.insert(0, event_id)

        data = []
        for event_id in live_events_ids:
            if counters[event_id][10] >= k1:
                data.append({'id': event_id,
                             'name': live_events[event_id]['event_name'],
                             'level': live_events[event_id]['level'],
                             'counters': counters[event_id],
                             'k2': k2_counters[event_id]})
        return Response(data)


class FactorBlockView(APIView):
    def get(self, *args, **kwargs):
        data = parser.get_blocked_events()
        return Response(data)


class BlockLogView(APIView):
    @staticmethod
    def get_event_blocks(event_id):
        display_threshold = 100
        result = []
        blocks_to_display = BlockLog.objects.filter(event_id=event_id).order_by('-time')
        if len(blocks_to_display) > display_threshold:
            blocks_to_display = blocks_to_display[:display_threshold]
        for block_log in blocks_to_display:
            result.append({'factor': block_log.get_factor_display(),
                           'param': block_log.param,
                           'value': block_log.value,
                           'comment': block_log.comment,
                           'score': block_log.score,
                           'time': localtime(block_log.time).strftime("%H:%M:%S")
                           })
        return result

    def get(self, request):
        if request.query_params.get('event_id'):
            data = self.get_event_blocks(request.query_params['event_id'])
            return Response(data)


class SportsView(APIView):
    def get(self, *args, **kwargs):
        data = []
        parser.get_updates()
        parser.get_sports()
        for sport_id, sport_name in parser.sports.items():
            data.append({'id': sport_id, 'name': sport_name})
        return Response(data)


class LoginView(APIView):
    def post(self, request):
        if request.data.get('login') and request.data.get('password'):
            login = request.data.get('login')
            password = request.data.get('password')
        else:
            return Response(status=400, exception=True)

        def validation(login, password):
            user = User.objects.filter(username=login).first()
            if user:
                if check_password(password, user.password):
                    request.session['isAuthorised'] = True
                    return True
            else:
                return False

        return Response(validation(login, password))


class CheckAuthentication(APIView):
    def get(self, request):
        if request.session.get('isAuthorised'):
            return Response({'status': True})
        else:
            return Response({'status': False})
