from django.urls import path
from .views import qr_reader, home

urlpatterns = [
    path("qr/", qr_reader, name="qr_readername"),
    path("", home, name="home_redirect"),
]
