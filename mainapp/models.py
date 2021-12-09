from django.db import models
from django.conf import settings


class BlockLog(models.Model):
    event_id = models.IntegerField('event_id')
    factor = models.IntegerField('factor', choices=settings.FACTOR_NAMES, default=-1)
    value = models.DecimalField('value', max_digits=100, decimal_places=2)
    param = models.CharField('param', max_length=255, null=True, blank=True)
    score = models.CharField('score', max_length=255, null=True, blank=True)
    comment = models.CharField('comment', max_length=255, blank=True, null=True)
    time = models.DateTimeField('time', auto_now=True)

