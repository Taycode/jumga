"""Order Mixins"""
from orders.models import ProductsInCart, ProductsInOrder
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
		orders = orders.annotate(total_price=F('product__price') * F('quantity'))
		total_price_sum = orders.aggregate(total_price_sum=Sum('total_price'))['total_price_sum']
		return total_price_sum

	def create_product_in_orders(self, user, order):
		"""Creates Product in orders after successful order"""
		products_in_cart = self.get_all_products_in_cart(user)
		for _ in products_in_cart:
			ProductsInOrder.objects.create(
				product=_.product,
				quantity=_.quantity,
				order=order
			)
		products_in_cart.delete()
