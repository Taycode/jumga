"""URL routing for Order App"""


from django.urls import path
from .views import (
	CheckoutAPIView,
	ConfirmOrderPaymentAPIView,
	RetrieveOrderAPIView,
	ListProductsInOrderAPIView,
	RetrieveProductsInOrderAPIView
)

urlpatterns = [
	path('checkout/', CheckoutAPIView.as_view()),
	path('checkout/confirm/', ConfirmOrderPaymentAPIView.as_view()),
	path('<int:pk>/', RetrieveOrderAPIView.as_view()),
	path('list/', ListProductsInOrderAPIView.as_view()),
	path('list/<int:pk>/', RetrieveProductsInOrderAPIView.as_view())
]
