"""Urls Patterns for USer APP"""


from django.urls import path, include
from .views import (
	CreateSuperUserView,
	CustomRegisterView,
	UserDetailsView,
	CollectUserDetailsView,
	VerifyUserAPIView,
	SellerStatisticsAPIView
)
from products.views import SellerListProductsView


urlpatterns = [
	path('registration/', CustomRegisterView.as_view()),
	path('admin/register/', CreateSuperUserView.as_view()),
	path('auth/', include('dj_rest_auth.urls')),
	path('details/', UserDetailsView.as_view()),
	path('details/update/', CollectUserDetailsView.as_view()),
	path('my-products/', SellerListProductsView.as_view()),
	path('verify/', VerifyUserAPIView.as_view()),
	path('seller/statistics/', SellerStatisticsAPIView.as_view())
]
