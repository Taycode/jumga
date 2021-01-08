"""Order Mixins"""
from orders.models import ProductsInCart
from django.db.models import Sum, F


class OrderProductMixin(object):
	"""Mixin for ordering products"""

	@staticmethod
	def get_all_products_in_cart(user):
		"""Gets all products in user cart"""
		return ProductsInCart.objects.filter(user=user)

	def calculate_total_price_for_orders(self, user):
		"""Calculates Total Price for orders"""
		orders = self.get_all_products_in_cart(user)
		orders.annotate(total_price=F('price') * F('quantity'))
		total_price_sum = orders.aggregate(total_price_sum=Sum('total_price'))['total_price_sum']
		return total_price_sum

