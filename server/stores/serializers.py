"""Serializers for Stores App"""


from rest_framework import serializers
from .models import Store


class ListStoresSerializer(serializers.ModelSerializer):
	"""Serializer for listing stores for a user"""

	class Meta:
		"""Meta class"""
		model = Store
		fields = ('name', )


class CreateStoreSerializer(serializers.Serializer):
	"""USed to create Stores"""

	name = serializers.CharField(max_length=255)
	owner = serializers.IntegerField()

	def update(self, instance, validated_data):
		"""Updates Store"""
		pass

	def create(self, validated_data):
		"""Creates Store"""
		store = Store.objects.create(**validated_data)
		return store
