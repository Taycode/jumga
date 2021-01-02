"""Serializers for Products APP"""


from rest_framework import serializers
from .models import Product
from stores.models import Store


class CreateProductSerializer(serializers.Serializer):
	"""Serializer for Creating Products"""

	name = serializers.CharField(max_length=255, required=True)
	price = serializers.IntegerField(max_value=10**12, min_value=0)
	description = serializers.CharField(max_length=511, required=False)
	store = serializers.PrimaryKeyRelatedField(queryset=Store.objects.all(), required=False)

	def create(self, validated_data):
		"""Create Product"""
		return Product.objects.create(**validated_data)

	def update(self, instance, validated_data):
		"""Update Product"""
		pass


class ListAndViewProductSerializer(serializers.ModelSerializer):
	"""Serializer for Listing and Retrieving Products"""

	class Meta:
		"""Meta Class"""
		model = Product
		fields = ('id', 'name', 'price', 'description', )


class BasicProductSerializer(serializers.ModelSerializer):
	"""Basic Serializer for Products"""

	class Meta:
		"""Meta Class"""
		model = Product
		fields = '__all__'
