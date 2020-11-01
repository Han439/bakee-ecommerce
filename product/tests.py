from django.test import TestCase
from rest_framework.test import APIClient

# Create your tests here.


class ViewsTest(TestCase):

    def test_main_view(self):
        response = self.client.get('/')

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')

    def test_product_list_view(self):
        client = APIClient()
        product_list_url = '/api/product/'
        response = client.get(product_list_url, format='json')

        self.assertEqual(response.status_code, 200)
