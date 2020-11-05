from django.test import TestCase, SimpleTestCase
from django.urls import reverse, resolve

from . import views
from .serializers import ProductSerializer
from .models import Product

from rest_framework.test import APIClient

# Create your tests here.


class TestUrls(SimpleTestCase):

    def test_product_list_url_resolve(self):
        url = reverse('product-list')
        self.assertEqual(resolve(url).func.view_class, views.ProductList)


class TestViews(TestCase):

    def test_main_view(self):
        response = self.client.get('/')

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')

    def test_product_list_view(self):
        client = APIClient()
        product_list_url = reverse('product-list')
        response = client.get(product_list_url, format='json')

        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, serializer.data)
