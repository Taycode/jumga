"""URL routing for Order App"""


from django.urls import path
from .views import (
	CheckoutAPIView,
	ConfirmOrderPaymentAPIView,
	RetrieveOrderAPIView
)

urlpatterns = [
	path('checkout/', CheckoutAPIView.as_view()),
	path('checkout/confirm/', ConfirmOrderPaymentAPIView.as_view()),
	path('<int:pk>/', RetrieveOrderAPIView.as_view())
]
