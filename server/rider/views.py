"""Views for Rider APp"""


from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView
from .serializers import ListDeliverySerializer, UpdateDeliveryStatusSerializer, RetrieveDeliverySerializer
from .models import Delivery


class ListDeliveryAPIView(ListAPIView):
	"""View for listing Delivery"""

	serializer_class = RetrieveDeliverySerializer

	def get_queryset(self):
		"""Returns Queryset"""
		return Delivery.objects.filter(rider=self.request.user)


class RetrieveDeliveryAPIView(RetrieveAPIView):
	"""View for retrieving Delivery data"""

	serializer_class = RetrieveDeliverySerializer

	def get_queryset(self):
		"""Returns Queryset"""
		return Delivery.objects.filter(rider=self.request.user)


class UpdateDeliveryStatusAPIView(UpdateAPIView):
	"""View for updating delivery status"""

	serializer_class = UpdateDeliveryStatusSerializer

	def get_queryset(self):
		"""Returns Queryset"""
		return Delivery.objects.filter(rider=self.request.user)

	def get_object(self):
		"""Returns object to be updated"""
		delivery = Delivery.objects.get(id=self.request.GET.get('pk'))
		return delivery
