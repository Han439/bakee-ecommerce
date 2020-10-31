from django.db import models

# Create your models here.


class Order(models.Model):
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    mail = models.EmailField()
    address = models.CharField(max_length=200)
    cart = models.CharField(max_length=10000)
    price = models.FloatField()
    deliveryFee = models.FloatField(default=0)
    order_date = models.DateTimeField(auto_now_add=True)
