import requests
from django.conf import settings


class Parser:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers = settings.FONBET_SESSION_HEADERS
        self.current_version = 0
        self.updates = None
        self.sports = {}
        self.timeout = 5

    def get_updates(self):
        params = {'lang': 'ru',
                  'scopeMarket': 1600,
                  'version': self.current_version}
        url = 'https://line510.bkfon-resources.com/events/list'
        response = self.session.get(url, params=params, timeout=self.timeout)  # TEST, NOT STABLE
        response.raise_for_status()
        self.updates = response.json()

    def get_live_events(self):
        if self.updates is None:
            self.get_updates()

        sports_data = self.get_sports()
        live_events = {}
        for event in self.updates['events']:
            if event['place'] == 'live':
                sport_header = sports_data[event['sportId']]['fullname']
                sport_id = sports_data[event['sportId']]['sportkind_id']
                if event['level'] > 1:
                    if event.get('name'):
                        try:
                            parent_name = live_events[event['parentId']]['event_name']
                            event_name = f"{event['name']}   ({parent_name})"
                        except KeyError:
                            event_name = f"{event['name']}   (Возможны ошибки)"

                    else:
                        continue
                else:
                    if event['name']:
                        event_name = f"{sport_header}/{event['name']}"
                    else:
                        event_name = f"{sport_header}/{event.get('team1')} vs {event.get('team2')}"
                live_events.update({
                    event['id']: {'event_name': event_name, 'level': event['level'], 'sport_id': sport_id}})
        return live_events

    def get_blocked_events(self):
        self.get_updates()
        live_events = self.get_live_events()
        blocked_events_factors = {}

        for block in self.updates['eventBlocks']:
            if block['eventId'] in live_events and block['state'] == 'partial':
                blocked_events_factors.update({block['eventId']: block['factors']})

        blocked_factors = {}
        for k, v in blocked_events_factors.items():
            blocked_factors.update(self.get_all_factors(k, v))
        return blocked_factors

    def get_all_factors(self, event_id, blocked_factors):
        url = 'https://line13.bkfon-resources.com/events/event'
        params = {'lang': 'ru', 'eventId': event_id, 'scopeMarket': 1600, 'version': 0}
        event_data = self.session.get(url, params=params, timeout=self.timeout)
        event_data.raise_for_status()
        event_data = event_data.json()
        result = {}
        # print(f"{event_id}: {len(blocked_factors)} factors, blocked_factors : {blocked_factors}")
        for response_event_factors in event_data['customFactors']:
            if response_event_factors['e'] == event_id:
                blocked_factor_params = []
                for response_event_factor in response_event_factors['factors']:
                    if response_event_factor['f'] in blocked_factors:
                        params = {'factor_id': response_event_factor['f'],
                                  'param': response_event_factor.get('pt'),
                                  'value': response_event_factor['v']}
                        blocked_factor_params.append(params)
                result.update({response_event_factors['e']: blocked_factor_params})
                break
        return result

    def get_event_misc(self, blocked_factors):
        result = {}
        for event_misc in self.updates['eventMiscs']:
            if event_misc['id'] in blocked_factors.keys():
                result.update(
                    {event_misc['id']: {'comment': event_misc.get('comment'),
                                        'score1': event_misc.get('score1'),
                                        'score2': event_misc.get('score2')}})
        return result

    def get_sports(self):
        sports_data = {}
        for sport in self.updates['sports']:
            if sport['kind'] == 'sport':
                self.sports.update({sport['id']: sport['name']})
            elif sport['kind'] == 'segment':
                sports_data.update({
                    sport['id']: {
                        "fullname": f"{sport['name']}",
                        "sportkind_id": sport['parentId']
                    }})
        return sports_data
