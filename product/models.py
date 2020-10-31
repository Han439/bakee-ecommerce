from django.db import models

# Create your models here.


class Product(models.Model):
    category_choices = [
        ('cake', 'cake'),
        ('drink', 'drink')
    ]
    name = models.CharField(max_length=15)
    price = models.FloatField()
    image = models.ImageField()
    category = models.CharField(
        max_length=20, choices=category_choices, default='cake')
    date_added = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name
