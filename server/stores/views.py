"""Views for Stores"""

from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from .serializers import (
	ListStoresSerializer,
	CreateStoreSerializer,
	BasicStoreModelSerializer,
	AssignRiderToStoreSerializer
)
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

		serializer.save(owner=self.request.user)


class DeleteStoreView(DestroyAPIView):
	"""Deletes Stores"""
	serializer_class = BasicStoreModelSerializer

	def get_queryset(self):
		"""Gets Queryset"""
		return Store.objects.filter(owner=self.request.user)


class UpdateStoreView(UpdateAPIView):
	"""Edit Stores"""

	serializer_class = BasicStoreModelSerializer

	def get_queryset(self):
		"""Gets Queryset"""
		return Store.objects.filter(owner=self.request.user)


class RetrieveStoreView(RetrieveAPIView):
	"""Retrieve Stores"""

	serializer_class = ListStoresSerializer

	def get_queryset(self):
		"""Gets Queryset"""
		return Store.objects.filter(owner=self.request.user)


class AssignRiderToStoreAPIView(UpdateAPIView):
	"""View for assigning rider to store"""

	serializer_class = AssignRiderToStoreSerializer

	def get_object(self):
		"""Get Store instance"""
		return Store.objects.get(id=self.request.data.get('store_id'))

	def get_queryset(self):
		"""Gets Queryset"""
		return Store.objects.filter(owner=self.request.user)
