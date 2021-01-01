"""Serializers for Stores App"""


from rest_framework import serializers
from .models import Store
from django.contrib.auth import get_user_model


User = get_user_model()


class BasicStoreModelSerializer(serializers.ModelSerializer):
	"""Basic Model Serializer for Stores"""

	class Meta:
		"""Meta Class"""
		model = Store
		fields = '__all__'


class ListStoresSerializer(serializers.ModelSerializer):
	"""Serializer for listing stores for a user"""

	class Meta:
		"""Meta class"""
		model = Store
		fields = ('id', 'name', )


class CreateStoreSerializer(serializers.Serializer):
	"""USed to create Stores"""

	name = serializers.CharField(max_length=255)
	owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), required=False)

	def update(self, instance, validated_data):
		"""Updates Store"""
		pass

	def create(self, validated_data):
		"""Creates Store"""
		store = Store.objects.create(**validated_data)
		return store