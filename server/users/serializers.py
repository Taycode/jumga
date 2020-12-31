"""Serializers for User APP"""


from rest_framework import serializers
from .models import User


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

