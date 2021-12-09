from django.urls import path
from .views import LiveEventView, FactorBlockView, BlockLogView, SportsView, LoginView, CheckAuthentication

urlpatterns = [
    path('live_events/', LiveEventView.as_view(), name='live_events'),
    path('all_blocked_events/', FactorBlockView.as_view(), name='all_blocked_factors'),
    path('event_blocks_info/', BlockLogView.as_view(), name='blocked_factors'),
    path('sports/', SportsView.as_view(), name='sports'),
    path('login/', LoginView.as_view(), name='login'),
    path('is_auth/', CheckAuthentication.as_view(), name='is_auth')
]
