"""Views for User APP"""


from rest_framework.generics import CreateAPIView
from .serializers import SuperUserCreateSerializer, CustomRegisterSerializer
from dj_rest_auth.registration.views import RegisterView


class CreateSuperUserView(CreateAPIView):
	"""Creates Admin User"""
	serializer_class = SuperUserCreateSerializer


class CustomRegisterView(RegisterView):
	"""Custom Registration View"""
	serializer_class = CustomRegisterSerializer
