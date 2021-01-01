"""Urls Patterns for USer APP"""


from django.urls import path, include
from .views import CreateSuperUserView, CustomRegisterView, UserDetailsView

urlpatterns = [
	path('registration/', CustomRegisterView.as_view()),
	path('admin/register/', CreateSuperUserView.as_view()),
	path('auth/', include('dj_rest_auth.urls')),
	path('details/', UserDetailsView.as_view())
]
