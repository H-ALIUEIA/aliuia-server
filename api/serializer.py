from rest_framework import serializers
from pages.models import QuotesModel, ShortsModel, VideosModel, LevelsModel, NotificationsModel, LevelsList, ProphecyLessonsModel, UnlearnModel

class QuotesSerializer(serializers.ModelSerializer):
 class Meta:
  model = QuotesModel
  fields = '__all__'
  
class ShortsSerializer(serializers.ModelSerializer):
 category = serializers.CharField(source='get_category_display')
 class Meta:
  model = ShortsModel
  fields = '__all__'
  
class VideosSerializer(serializers.ModelSerializer):
 class Meta:
  model = VideosModel
  fields = '__all__'

class LevelsSerializer(serializers.ModelSerializer):
 class Meta:
  model = LevelsModel
  fields = '__all__'

class NotificationsSerializer(serializers.ModelSerializer):
 category_name = serializers.ReadOnlyField()
 
 class Meta:
  model = NotificationsModel
  fields = '__all__'
  
class LevelsFilterSerializer(serializers.ModelSerializer):
 class Meta:
  model = LevelsModel
  fields = ('id',)
  
class LevelsListSerializer(serializers.ModelSerializer):
 groups = LevelsFilterSerializer(many=True, read_only=True)
 
 class Meta:
  model = LevelsList
  fields = '__all__'
 
class ProphecyLessonsSerializer(serializers.ModelSerializer):
 class Meta:
  model = ProphecyLessonsModel
  fields = '__all__'
  
class UnlearnSerializer(serializers.ModelSerializer):
 class Meta:
  model = UnlearnModel
  fields = '__all__'
