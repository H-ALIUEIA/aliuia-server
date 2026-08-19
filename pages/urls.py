from django.urls import path
from .views import qr_reader, home, shop, books

urlpatterns = [
    path("qr/", qr_reader, name="qr_readername"),
    path("", home, name="home_redirect"),
    path("shop/", shop.as_view(), name="shop"),
    path("shop/books", books.as_view(), name="books"),
]
