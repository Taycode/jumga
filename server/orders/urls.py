"""URL routing for Order App"""


from django.urls import path
from .views import (
	CheckoutAPIView,
	ConfirmOrderPaymentAPIView
)

urlpatterns = [
	path('cart/checkout/', CheckoutAPIView.as_view()),
	path('cart/checkout/confirm/', ConfirmOrderPaymentAPIView.as_view())
]
