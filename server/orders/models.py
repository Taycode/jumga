"""Order App models"""

from django.db import models
from products.models import Product
from payment.models import Transaction
from users.choices import country_choices, DEFAULT_COUNTRY_CHOICE
from django.db.models import Sum, F
from django.contrib.auth import get_user_model


User = get_user_model()


class Order(models.Model):
	"""Order Model"""

	transaction = models.OneToOneField(Transaction, on_delete=models.CASCADE, blank=True, null=True)
	address = models.TextField()
	total_cost = models.DecimalField(decimal_places=2, max_digits=12, default=0)
	phone_number = models.CharField(null=True, max_length=16)
	email = models.EmailField(null=True)
	country = models.CharField(max_length=16, choices=country_choices, default=DEFAULT_COUNTRY_CHOICE)
	name = models.CharField(max_length=255, null=True)
	paid = models.BooleanField(default=False)

	def get_total_cost(self):
		"""Gets total cost of order"""
		products_in_order = ProductsInOrder.objects.filter(order=self)
		products_in_order = products_in_order.annotate(total_price=F('product__price') * F('quantity'))
		total_price_sum = products_in_order.aggregate(total_price_sum=Sum('total_price'))['total_price_sum']
		self.total_cost = total_price_sum
		return self.save()


class ProductsInOrder(models.Model):
	"""Products in Carts"""
	product = models.ForeignKey(Product, on_delete=models.CASCADE)
	quantity = models.IntegerField(default=0)
	order = models.ForeignKey(Order, on_delete=models.CASCADE)
	jumga_commission = models.BigIntegerField(default=0)
	rider_commission = models.BigIntegerField(default=0)
	seller_commission = models.BigIntegerField(default=0)