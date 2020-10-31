from django.urls import path, re_path, include
from . import views


urlpatterns = [
    path('', views.ProductList.as_view(), name='product-list'),
]
