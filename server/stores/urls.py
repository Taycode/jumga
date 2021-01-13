"""Url patterns for stores app"""

from django.urls import path, include
from .views import (
	CreateStoreView,
	ListStoresView,
	DeleteStoreView,
	UpdateStoreView,
	RetrieveStoreView,
	AssignRiderToStoreAPIView
)

urlpatterns = [
	path('all/', ListStoresView.as_view()),
	path('create/', CreateStoreView.as_view()),
	path('delete/<int:pk>/', DeleteStoreView.as_view()),
	path('update/<int:pk>/', UpdateStoreView.as_view()),
	path('<int:pk>/', RetrieveStoreView.as_view()),
	path('rider/assign/', AssignRiderToStoreAPIView.as_view()),
	path('<int:store>/product/', include('products.urls'))
]
