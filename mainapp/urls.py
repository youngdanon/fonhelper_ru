from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.live_events_request, name='test_react')
]