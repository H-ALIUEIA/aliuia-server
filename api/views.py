from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from pages.models import QuotesModel, ShortsModel, VideosModel, LevelsModel, NotificationsModel, LevelsList, ProphecyLessonsModel, UnlearnModel
from .serializer import QuotesSerializer, ShortsSerializer, VideosSerializer, LevelsSerializer, NotificationsSerializer, LevelsListSerializer, ProphecyLessonsSerializer, UnlearnSerializer
from random import choice
from django.http import FileResponse
from django.conf import settings
from drf_multiple_model.views import ObjectMultipleModelAPIView
import os
from django.core import serializers

class download_db(ObjectMultipleModelAPIView):
 querylist = [
  {'queryset': QuotesModel.objects.all(), 'serializer_class': QuotesSerializer},
  {'queryset': ShortsModel.objects.all(), 'serializer_class': ShortsSerializer},
  {'queryset': VideosModel.objects.all(), 'serializer_class': VideosSerializer},
  {'queryset': LevelsModel.objects.all(), 'serializer_class': LevelsSerializer},
  {'queryset': LevelsList.objects.all(), 'serializer_class': LevelsListSerializer},
  {'queryset': ProphecyLessonsModel.objects.all(), 'serializer_class': ProphecyLessonsSerializer}
 ]

@api_view(['GET'])
def unlearn(request,pk):
 unlearnmodel = UnlearnModel.objects.all().filter(id=pk)
 serializer = UnlearnSerializer(unlearnmodel, many=True)
 return Response(serializer.data)

@api_view(['GET'])
def get_notifications(request):
 notifications = NotificationsModel.objects.all()
 serializer = NotificationsSerializer(notifications, many=True)
 return Response(serializer.data)

@api_view(['GET'])
def get_prophecy_lesson(request, day):
 lesson = ProphecyLessonsModel.objects.all().filter(day=day)
 serializer = ProphecyLessonsSerializer(lesson, many=True)
 return Response(serializer.data)

@api_view(['GET'])
def get_videos(request):
 videos = VideosModel.objects.all()
 serializer = VideosSerializer(videos, many=True)
 return Response(serializer.data)

@api_view(['GET'])
def get_quote(request):
 quotes = QuotesModel.objects.all()
 serializer = QuotesSerializer(quotes, many=True)
 return Response(serializer.data)

@api_view(['GET'])
def get_quote_num(request, pk):
 if(pk == 0):
  quotes = QuotesModel.objects.all()
  serializer = QuotesSerializer(quotes, many=True)
  return Response(serializer.data)
 if(pk == 1):
  quotes = QuotesModel.objects.all().filter(category="Bible")
  serializer = QuotesSerializer(quotes, many=True)
  return Response(serializer.data)
 if(pk == 2):
  quotes = QuotesModel.objects.all().filter(category="Cons")
  serializer = QuotesSerializer(quotes, many=True)
  return Response(serializer.data)
 if(pk == 3):
  quotes = QuotesModel.objects.all().filter(category="Mov-Ser")
  serializer = QuotesSerializer(quotes, many=True)
  return Response(serializer.data)
  
@api_view(['GET'])
def getnotificationupdate(request,pk):
 if(pk == 0):
  quotes = QuotesModel.objects.all()#filter
  serializer = QuotesSerializer(quotes, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def get_short(request):
 shorts = ShortsModel.objects.all()
 serializer = ShortsSerializer(shorts, many=True)
 return Response(serializer.data)
 
@api_view(['GET'])
def get_version(request):
 return Response({'version': '2'})
 
@api_view(['GET'])
def get_level_num(request, pk):
 levels = LevelsModel.objects.get(id=pk)
 serializer = LevelsSerializer(levels)
 return Response(serializer.data)

@api_view(['GET'])
def get_level_list(request, pk):
 quotess = LevelsList.objects.all().filter(book=pk)
 serializer = LevelsListSerializer(quotess, many=True)
 return Response(serializer.data)

@api_view(['GET'])
def get_short_category(request, pk):
 if(pk == 0):
  shorts = ShortsModel.objects.all()
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 1):
  shorts = ShortsModel.objects.all().filter(category="15MINCITIES")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 2):
  shorts = ShortsModel.objects.all().filter(category="SYNAGOGUEANDANTICHRIST")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 3):
  shorts = ShortsModel.objects.all().filter(category="CHIPS")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 4):
  shorts = ShortsModel.objects.all().filter(category="CONTROL")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 5):
  shorts = ShortsModel.objects.all().filter(category="Covid")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 6):
  shorts = ShortsModel.objects.all().filter(category="COVIDPROGRAMMING")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 7):
  shorts = ShortsModel.objects.all().filter(category="ELITESRELIGION")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 8):
  shorts = ShortsModel.objects.all().filter(category="FAKEALIENINVATION")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 9):
  shorts = ShortsModel.objects.all().filter(category="OVERPOPULATION")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 10):
  shorts = ShortsModel.objects.all().filter(category="EXTRA")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)
 if(pk == 11):
  shorts = ShortsModel.objects.all().filter(category="NOSOURCE")
  serializer = ShortsSerializer(shorts, many=True)
  return Response(serializer.data)

