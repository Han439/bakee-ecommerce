from django.contrib import admin

from .models import Order

# Register your models here.


class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'mail', 'price', 'order_date')
    list_display_links = ('id', 'name')
    search_fields = ('name',)


admin.site.register(Order, OrderAdmin)
