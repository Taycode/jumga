"""Order App models"""

from django.db import models
from products.models import Product
from payment.models import Transaction

from django.contrib.auth import get_user_model


User = get_user_model()


class ProductsInCart(models.Model):
	"""Products in Carts"""
	product = models.ForeignKey(Product, on_delete=models.CASCADE)
	quantity = models.IntegerField(default=0)
	user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


class Order(models.Model):
	"""Order Model"""

	transaction = models.OneToOneField(Transaction, on_delete=models.CASCADE)
	orders = models.ManyToManyField(ProductsInCart, blank=True, null=True)
	address = models.TextField()
