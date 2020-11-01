from django.test import TestCase
from rest_framework.test import APIClient

# Create your tests here.


class ViewsTest(TestCase):

    def test_order_create_view(self):
        client = APIClient()

        input_data = {
            "id": 1,
            "name": "Hannah S.",
            "phone": "01239012212",
            "mail": "hannfei99@gmail.com",
            "address": "125 Trần Đình Xu, Nguyen Cu Trinh, District 1, Ho Chi Minh City, Vietnam",
            "cart": "[{\"id\":4,\"name\":\"Berry Castle\",\"price\":2,\"image\":\"https://bakeestore.herokuapp.com/media/pexels-kristina-paukshtite-1998632_5CYVCXo.jpg\",\"category\":\"cake\",\"quantity\":1,\"basePrice\":2},{\"id\":2,\"name\":\"Beatle Juice\",\"price\":1,\"image\":\"https://bakeestore.herokuapp.com/media/pexels-artem-beliaikin-914241_1_65pAZTJ.jpg\",\"category\":\"drink\",\"quantity\":1,\"basePrice\":1}]",
            "price": 30,
            "deliveryFee": 0.3
        }

        response = client.post('/api/order/', input_data, format='json')

        self.assertEqual(response.status_code, 200)
        self.assertTrue('success' in response.data)
