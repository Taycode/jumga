from django.contrib import admin

from .models import Order, ProductsInOrder

admin.site.register(Order)
admin.site.register(ProductsInOrder)
