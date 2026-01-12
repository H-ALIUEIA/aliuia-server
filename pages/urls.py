from django.urls import path
from .views import qr_reader

urlpatterns = [
    path("qr/", qr_reader, name="qr_readername"),
]
