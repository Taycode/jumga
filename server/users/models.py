"""User Model"""
from django.db import models
from django.db.models import Count, Sum
from django.contrib.auth.models import AbstractUser
from .choices import role_choices, DEFAULT_USER_ROLE, country_choices, DEFAULT_COUNTRY_CHOICE
# from products.models import Product
# from orders.models import ProductsInOrder


class User(AbstractUser):
	"""Custom User Model"""

	role = models.CharField(max_length=16, choices=role_choices, default=DEFAULT_USER_ROLE)
	country = models.CharField(max_length=16, choices=country_choices, default=DEFAULT_COUNTRY_CHOICE)
	account_bank = models.CharField(max_length=8, blank=True, null=True)
	account_name = models.CharField(max_length=64, blank=True, null=True)
	account_number = models.CharField(max_length=16, blank=True, null=True)
	verified = models.BooleanField(default=False)
	withdrawn = models.BigIntegerField(default=0)
	balance = models.BigIntegerField(default=0)

	def get_stores_count(self):
		"""Returns count of stores"""
		return self.store_set.count()

	def get_products_count(self):
		"""Returns count of products"""
		product_counts = self.store_set.annotate(num_products=Count('product'))
		product_counts = product_counts.aggregate(sum_products=Sum('num_products'))
		return product_counts['sum_products']

	# def get_sales_count(self):
	# 	"""Return count of sales"""
	# 	return ProductsInOrder.objects.filter(product__store__owner=self).count()

	def get_earnings(self):
		"""Return Earnings"""
		return self.balance + self.withdrawn
