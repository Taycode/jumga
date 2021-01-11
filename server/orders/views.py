"""Order Views"""


from rest_framework.generics import (
	CreateAPIView,
	UpdateAPIView,
	RetrieveAPIView
)
from .serializers import (
	CreateOrderOnCheckoutSerializer,
	ConfirmOrderPaymentSerializer,
	ViewOrderSerializer
)
from .models import Order
from products.models import Product
from orders.models import Order


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


class RetrieveOrderAPIView(RetrieveAPIView):
	"""View for retrieving Order"""

	serializer_class = ViewOrderSerializer

	def get_queryset(self):
		"""Get Queryset"""

		return Order.objects.all()
