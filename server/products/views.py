"""Views for Product app"""

from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from .serializers import CreateProductSerializer, ListAndViewProductSerializer, BasicProductSerializer, ProductImageSerializer
from .models import Product, ProductImage
from stores.models import Store
from rest_framework.permissions import IsAuthenticated
from products.services import ProductService


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

	def get_queryset(self):
		"""Add extra context to serializer"""
		ip = self.request.query_params.get('ip')
		product_service = ProductService()
		country = product_service.get_country(ip) if ip else 'nigeria'
		if country.lower() == 'united kingdom':
			country = 'uk'
		return Product.objects.filter(store__owner__country__iexact=country)


class SellerListProductsView(ListAPIView):
	"""View for listing Products"""
	serializer_class = ListAndViewProductSerializer
	permission_classes = (IsAuthenticated, )

	def get_queryset(self):
		"""Get Queryset"""
		return Product.objects.filter(store__owner=self.request.user)


class CreateProductImageView(CreateAPIView):
	"""View for creating product images"""
	serializer_class = ProductImageSerializer

	def get_queryset(self):
		"""Get Queryset"""
		product = Product.objects.get(id=self.kwargs.get('product'))
		return ProductImage.objects.filter(product=product)

	def perform_create(self, serializer):
		"""Customize Create"""
		product = Product.objects.get(id=self.kwargs.get('product'))
		serializer.save(product=product)


class ListProductImagesView(ListProductsView):
	"""View for retrieving lists of images for a product"""

	serializer_class = ProductImageSerializer

	def get_queryset(self):
		"""Get Queryset"""
		product = Product.objects.get(id=self.kwargs.get('product'))
		return ProductImage.objects.filter(product=product)


class DeleteProductImageView(DestroyAPIView):
	"""View for deleting an image from a product list of images"""

	serializer_class = ProductImageSerializer

	def get_queryset(self):
		"""Get Queryset"""
		product = Product.objects.get(id=self.kwargs.get('product'))
		return ProductImage.objects.filter(product=product)
