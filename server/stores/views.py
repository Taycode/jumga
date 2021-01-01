"""Views for Stores"""

from rest_framework.generics import ListAPIView, CreateAPIView
from .serializers import ListStoresSerializer, CreateStoreSerializer
from .models import Store
from rest_framework.permissions import IsAuthenticated


class ListStoresView(ListAPIView):
	"""Used to list Stores owned by a user"""
	serializer_class = ListStoresSerializer
	permission_classes = (IsAuthenticated, )

	def get_queryset(self):
		"""Returns Queryset"""
		return Store.objects.filter(owner=self.request.user)


class CreateStoreView(CreateAPIView):
	"""Creates Stores"""
	serializer_class = CreateStoreSerializer

	def perform_create(self, serializer):
		"""Override Perform create function"""
		serializer.save(owner=self.request.user.id)
