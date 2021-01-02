"""Products URL"""

from django.urls import path
from .views import CreateProductView, ListProductsView, RetrieveProductView, DeleteProductView, UpdateProductView

urlpatterns = [
	path('create/', CreateProductView.as_view()),
	path('all/', ListProductsView.as_view()),
	path('<int:pk>/', RetrieveProductView.as_view()),
	path('<int:pk>/delete/', DeleteProductView.as_view()),
	path('<int:pk>/update/', UpdateProductView.as_view()),
]
