"""Products URL"""

from django.urls import path

from .views import (
	CreateProductView,
	ListProductsView,
	RetrieveProductView,
	DeleteProductView,
	UpdateProductView,
	CreateProductImageView,
	ListProductImagesView,
	DeleteProductImageView
)
urlpatterns = [
	path('create/', CreateProductView.as_view()),
	path('all/', ListProductsView.as_view()),
	path('<int:pk>/', RetrieveProductView.as_view()),
	path('<int:pk>/delete/', DeleteProductView.as_view()),
	path('<int:pk>/update/', UpdateProductView.as_view()),
	path('<int:product>/image/create/', CreateProductImageView.as_view()),
	path('<int:product>/image/all/', ListProductImagesView.as_view()),
	path('<int:product>/image/<int:pk>/delete/', DeleteProductImageView.as_view())
]
