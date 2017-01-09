from __future__ import unicode_literals

from django.db import models


class Collection(models.Model):
    title = models.CharField(max_length=1000)
    items = models.ManyToManyField(to='Item')


class Item(models.Model):
    _id = models.CharField(max_length=10, default='', primary_key=True)
    title = models.CharField(max_length=1000)
    # type = models.CharField(max_length=1000)
    url = models.URLField()