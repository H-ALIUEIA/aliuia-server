from django.urls import path
from .views import get_quote, get_quote_num, get_short, get_short_category, getnotificationupdate, get_version, get_videos, get_level_num, download_db, get_notifications, get_level_list, get_prophecy_lesson, unlearn

urlpatterns = [
    path("videos/", get_videos, name="getvideos"),
    path("version/", get_version, name="getversion"),
    path("quote/", get_quote, name="getquote"),
    path("quote/<int:pk>", get_quote_num, name="getquotenum"),
    path("shorts/", get_short, name="getshort"),
    path("shorts/<int:pk>", get_short_category, name="getshortcategory"),
    path("notificationupdate/<int:pk>", getnotificationupdate, name="getnotificationupdate"),
    path("level/<int:pk>", get_level_num, name="getlevelnum"),
    path("download/db", download_db.as_view(), name="downloaddb"),
    path("getnotifications/", get_notifications, name="getnotifications"),
    path("getlevellist/<int:pk>", get_level_list, name="getlevellist"),
    path("prophecylessons/<int:day>", get_prophecy_lesson, name="getprophecylesson"),
    path("unlearn/<int:pk>", unlearn, name="unlearn")
]
