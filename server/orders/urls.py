"""URL routing for Order App"""


from django.urls import path
from .views import (
	AddToCartAPIView,
	ViewCartAPIView,
	DeleteProductInCartAPIView,
	UpdateProductInCartAPIView
)

urlpatterns = [
	path('cart/', ViewCartAPIView.as_view()),
	path('cart/add/', AddToCartAPIView.as_view()),
	path('cart/delete/<int:pk>/', DeleteProductInCartAPIView.as_view()),
	path('cart/update/<int:pk>/', UpdateProductInCartAPIView.as_view())
]
