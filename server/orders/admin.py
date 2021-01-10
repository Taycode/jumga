from django.contrib import admin

from .models import ProductsInCart, Order, ProductsInOrder

admin.site.register(ProductsInCart)
admin.site.register(Order)
admin.site.register(ProductsInOrder)
