"""Order Views"""


from rest_framework.generics import (
	CreateAPIView,
	ListAPIView,
	DestroyAPIView,
	UpdateAPIView
)
from .serializers import (
	AddToCartSerializer,
	ViewCartSerializer,
	BasicCartSerializer,
	MakeOrderWithCardSerializer,
	CreateOrderOnCheckoutSerializer
)
from .models import ProductsInCart
from products.models import Product


class AddToCartAPIView(CreateAPIView):
	"""View for adding to cart"""

	serializer_class = AddToCartSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return ProductsInCart.objects.filter(user=self.request.user)

	def perform_create(self, serializer):
		"""Customize Create"""

		serializer.save(user=self.request.user)


class ViewCartAPIView(ListAPIView):
	"""View for viewing cart"""

	serializer_class = ViewCartSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return ProductsInCart.objects.filter(user=self.request.user)


class DeleteProductInCartAPIView(DestroyAPIView):
	"""View for deleting products in cart"""

	serializer_class = BasicCartSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return ProductsInCart.objects.filter(user=self.request.user)


class UpdateProductInCartAPIView(UpdateAPIView):
	"""View for Updating products in cart"""

	serializer_class = ViewCartSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return ProductsInCart.objects.filter(user=self.request.user)


class MakeOrderWithCardAPIView(CreateAPIView):
	"""View for Making Order"""

	serializer_class = MakeOrderWithCardSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return ProductsInCart.objects.filter(user=self.request.user)

	def perform_create(self, serializer):
		"""Customize CReate"""
		amount = serializer.calculate_total_price_for_orders(self.request.user)
		serializer.save(user=self.request.user, amount=amount)


class CheckoutAPIView(CreateAPIView):
	"""View for Checkout"""

	serializer_class = CreateOrderOnCheckoutSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return Product.objects.all()

# class ConfirmCardPaymentAPIView(APIView):
# 	"""Confirm Card Payment View"""
