"""Views for Product app"""

from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from .serializers import CreateProductSerializer, ListAndViewProductSerializer, BasicProductSerializer
from .models import Product
from stores.models import Store
from rest_framework.permissions import IsAuthenticated


class CreateProductView(CreateAPIView):
	"""View for Creating Products"""
	serializer_class = CreateProductSerializer

	def get_queryset(self):
		"""Get Queryset"""
		store = Store.objects.get(id=self.kwargs.get('store'))
		return Product.objects.filter(store=store)

	def perform_create(self, serializer):
		"""Creates The Product"""
		store = Store.objects.get(id=self.kwargs.get('store'))
		serializer.save(store=store)


class ListProductsView(ListAPIView):
	"""View for listing Products"""
	serializer_class = ListAndViewProductSerializer

	def get_queryset(self):
		"""Get Queryset"""
		store = Store.objects.get(id=self.kwargs.get('store'))
		return Product.objects.filter(store=store)


class RetrieveProductView(RetrieveAPIView):
	"""View for Retrieving Products"""

	serializer_class = ListAndViewProductSerializer

	def get_queryset(self):
		"""Get Queryset"""
		store = Store.objects.get(id=self.kwargs.get('store'))
		return Product.objects.filter(store=store)


class DeleteProductView(DestroyAPIView):
	"""View for Deleting Products"""

	serializer_class = BasicProductSerializer

	def get_queryset(self):
		"""Get Queryset"""
		store = Store.objects.get(id=self.kwargs.get('store'))
		return Product.objects.filter(store=store)


class UpdateProductView(UpdateAPIView):
	"""View for Updating Products"""

	serializer_class = BasicProductSerializer

	def get_queryset(self):
		"""Get Queryset"""
		store = Store.objects.get(id=self.kwargs.get('store'))
		return Product.objects.filter(store=store)


class GlobalListProductsView(ListAPIView):
	"""View for listing Products"""
	serializer_class = ListAndViewProductSerializer
	queryset = Product.objects.all()


class SellerListProductsView(ListAPIView):
	"""View for listing Products"""
	serializer_class = ListAndViewProductSerializer
	permission_classes = (IsAuthenticated, )

	def get_queryset(self):
		"""Get Queryset"""
		return Product.objects.filter(store__owner=self.request.user)
