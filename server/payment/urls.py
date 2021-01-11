"""URL patterns for Payments"""


from django.urls import path
from .views import ChargeCardAPIView, ValidateCardChargeAPIView


urlpatterns = [
	path('charge/card/', ChargeCardAPIView.as_view()),
	path('charge/validate/', ValidateCardChargeAPIView.as_view())
]
