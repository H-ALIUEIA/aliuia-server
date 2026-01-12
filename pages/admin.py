from django.contrib import admin
from .models import QuotesModel, ShortsModel, VideosModel, LevelsModel, NotificationsModel, LevelsList, ProphecyLessonsModel, UnlearnModel

admin.site.register(QuotesModel)
admin.site.register(ShortsModel)
admin.site.register(VideosModel)
admin.site.register(LevelsModel)
admin.site.register(NotificationsModel)
admin.site.register(LevelsList)
admin.site.register(ProphecyLessonsModel)
admin.site.register(UnlearnModel)

# Register your models here.
