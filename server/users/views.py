"""Views for User APP"""


from rest_framework.generics import CreateAPIView
from .serializers import SuperUserCreateSerializer


class CreateSuperUserView(CreateAPIView):
	"""Creates Admin User"""
	serializer_class = SuperUserCreateSerializer
