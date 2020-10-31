
from django.contrib import admin
from django.urls import path, re_path, include

from . import views


urlpatterns = [
    path('', views.OrderCreateView.as_view(), name='order-create')
]
