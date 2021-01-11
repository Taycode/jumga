"""URL routing for Order App"""


from django.urls import path
from .views import (
	CheckoutAPIView,
	ConfirmOrderPaymentAPIView
)

urlpatterns = [
	path('checkout/', CheckoutAPIView.as_view()),
	path('checkout/confirm/', ConfirmOrderPaymentAPIView.as_view())
]
