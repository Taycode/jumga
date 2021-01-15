"""Order Views"""


from rest_framework.generics import (
	CreateAPIView,
	UpdateAPIView,
	RetrieveAPIView,
	ListAPIView
)
from .serializers import (
	CreateOrderOnCheckoutSerializer,
	ConfirmOrderPaymentSerializer,
	ViewOrderSerializer,
	RetrieveAndListProductsInOrderSerializer
)
from products.models import Product
from orders.models import Order, ProductsInOrder


class CheckoutAPIView(CreateAPIView):
	"""View for Checkout"""

	serializer_class = CreateOrderOnCheckoutSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return Product.objects.all()


class ConfirmOrderPaymentAPIView(UpdateAPIView):
	"""View for confirming the payment of an order"""

	serializer_class = ConfirmOrderPaymentSerializer

	def get_object(self):
		"""Get Order Instance"""

		return Order.objects.get(id=self.request.data.get('order_id'))

	def get_queryset(self):
		"""Get Queryset"""

		return Order.objects.filter(id=self.request.data.get('order_id'))

	def post(self, request, *args, **kwargs):
		"""Post Request"""
		return self.patch(request, *args, **kwargs)


class RetrieveOrderAPIView(RetrieveAPIView):
	"""View for retrieving Order"""

	serializer_class = ViewOrderSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return Order.objects.all()


class ListProductsInOrderAPIView(ListAPIView):
	"""View for retrieving list of orders"""

	serializer_class = RetrieveAndListProductsInOrderSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return ProductsInOrder.objects.filter(product__store__owner=self.request.user)


class RetrieveProductsInOrderAPIView(RetrieveAPIView):
	"""API View for retrieving PRoducts in Order"""

	serializer_class = RetrieveAndListProductsInOrderSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return ProductsInOrder.objects.filter(product__store__owner=self.request.user)
