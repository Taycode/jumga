"""Serializers for User APP"""


from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import User
from .choices import role_choices, DEFAULT_USER_ROLE


class SuperUserCreateSerializer(serializers.Serializer):
	"""Serializer for Creating Super Users"""

	username = serializers.CharField(max_length=255, required=True)
	password = serializers.CharField(max_length=255, write_only=True, required=True)

	@staticmethod
	def validate_username(username):
		"""

		:param username: string (username of user)
		:return: string (cleaned username of user)
		"""
		return username.lower()

	def create(self, validated_data):
		"""

		:param validated_data: dict
		:return: User
		"""
		username = validated_data.get('username')
		password = validated_data.get('password')

		admin = User.objects.create_superuser(username, password=password)
		admin.is_active = True
		admin.is_admin = True
		admin.save()

		return admin

	def update(self, instance, validated_data):
		"""

		:param instance: User
		:param validated_data: dict
		:return:
		"""
		pass


class UserEditSerializer(serializers.ModelSerializer):
	"""Serializer for Editing Users DAta"""

	username = serializers.CharField(required=False, max_length=255)

	class Meta:
		"""Meta Class"""
		model = User
		fields = ('username', 'email', 'role', 'first_name', 'last_name', )


class CustomRegisterSerializer(RegisterSerializer):
	"""Custom Register Serializer"""

	role = serializers.ChoiceField(role_choices, default=DEFAULT_USER_ROLE)
	first_name = serializers.CharField(max_length=255, required=True)
	last_name = serializers.CharField(max_length=255, required=True)

	def update(self, instance, validated_data):
		"""

		:param instance:
		:param validated_data:
		:return:
		"""
		pass

	def create(self, validated_data):
		"""

		:param validated_data:
		:return:
		"""
		pass

	def custom_signup(self, request, user):
		"""

		:param request: request object
		:param user: User object
		:return: User Object
		"""
		data = {
			'role': self.validated_data.get('role'),
			'first_name': self.validated_data.get('first_name'),
			'last_name': self.validated_data.get('last_name')
		}
		serializer = UserEditSerializer(instance=user, data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return serializer.instance


class UserDetailsSerializer(serializers.ModelSerializer):
	"""This is used to get User Details data"""

	class Meta:
		"""Meta Class"""

		model = User
		fields = ('first_name', 'last_name', 'role', 'email', )
