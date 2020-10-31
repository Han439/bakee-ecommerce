from django.contrib import admin

from .models import Product

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'category', 'date_added')
    list_display_links = ('id', 'name')
    list_filter = ('category',)
    search_fields = ('name',)


admin.site.register(Product, ProductAdmin)
