from django.shortcuts import render
from django.http import HttpResponseRedirect
from random import choice
from .models import QuotesModel, Offline_Categories
from django.views.generic import DetailView, TemplateView
from django.views import View
from django.shortcuts import redirect

def qr_reader(request):
    if(request.Android):
        return redirect("https://play.google.com/store/apps/details?id=aenu.aps3e&hl=en")
    #else:
    #    return redirect('home_redirect')
