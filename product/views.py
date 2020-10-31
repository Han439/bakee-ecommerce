from django.shortcuts import render

from .models import Product
from .serializers import ProductSerializer

from rest_framework import generics
from rest_framework import permissions
# Create your views here.


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all().order_by("-date_added")
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)
