from django.shortcuts import render


def live_events_request(request):
    return render(request, 'index.html', {})
