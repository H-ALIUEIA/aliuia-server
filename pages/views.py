from django.shortcuts import render
from django.http import HttpResponseRedirect
from random import choice
from .models import QuotesModel, Offline_Categories, ItemModel, BookModel
from django.views.generic import DetailView, TemplateView, ListView
from django.views import View
from django.shortcuts import redirect
from .filters import ItemFilter
from django_filters.views import FilterView

def qr_reader(request):
    if(request.Android):
        return redirect("https://play.google.com/store/apps/details?id=aenu.aps3e&hl=en")
    else:
        return redirect('home_redirect')

def home(request):
 return render(request, "index.html")
 
class shop(FilterView):
 model=ItemModel
 template_name = "shop.html"
 paginate_by = 6
 filterset_class = ItemFilter
 
 def get_context_data(self, **kwargs):
  context = super(shop, self).get_context_data(**kwargs)
  qwe = self.request.GET.get("category",None)
  context["cat"] = qwe
  return context
  
class books(ListView):
 model=BookModel
 template_name = "books.html"
 paginate_by = 6
