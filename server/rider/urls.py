"""URLs for Rider APP"""
from .views import (
	ListDeliveryAPIView,
	RetrieveDeliveryAPIView,
	UpdateDeliveryStatusAPIView
)
from django.urls import path


urlpatterns = [
	path('delivery/all/', ListDeliveryAPIView.as_view()),
	path('delivery/<int:pk>/', RetrieveDeliveryAPIView.as_view()),
	path('delivery/status/<int:pk>/', UpdateDeliveryStatusAPIView.as_view())
]
