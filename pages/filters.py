import django_filters
from .models import *

class ItemFilter(django_filters.FilterSet):
 class Meta:
  model = ItemModel
  fields = ['category', 'price']
