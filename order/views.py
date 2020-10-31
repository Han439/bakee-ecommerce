from django.shortcuts import render
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings

import json

from .models import Order
from .serializers import OrderSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import permissions
from rest_framework import status

# Create your views here.


class OrderCreateView(APIView):

    def get(self, request):
        queryset = Order.objects.all()
        serializer = OrderSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            try:
                # Configure Email content
                context = {
                    'name': data['name'],
                    'phone': data['phone'],
                    'address': data['address'],
                    'cart': json.loads(data['cart']),
                    'price': float(data['price']) + float(data['deliveryFee']),
                    'deliveryFee': data['deliveryFee']
                }
                html_content = render_to_string(
                    'comfirmation_email.html', context
                )
                text_content = strip_tags(html_content)

                # send mail
                email = EmailMultiAlternatives(
                    'Comfirm Your Order',
                    html_content,
                    settings.EMAIL_HOST_USER,
                    [data['mail'], settings.EMAIL_HOST_USER],
                )
                email.attach_alternative(html_content, 'text/html')
                email.send()

                # save order to admin if email is comfirm successfully
                serializer.save()

                return Response({'success': 'your order is comfirmed'})

            except Exception as e:
                return Response({'error': str(e)})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
