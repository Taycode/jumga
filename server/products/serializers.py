"""Serializers for Products APP"""


from rest_framework import serializers
from .models import Product, ProductImage
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

	def to_representation(self, instance):
		"""Customize Response"""
		data = super(ListAndViewProductSerializer, self).to_representation(instance)
		data.update({
			'country': instance.store.owner.country,
			'images': ProductImageSerializer(ProductImage.objects.filter(product=instance), many=True).data
		})
		return data

	class Meta:
		"""Meta Class"""
		model = Product
		fields = ('id', 'name', 'price', 'description', 'store', )


class BasicProductSerializer(serializers.ModelSerializer):
	"""Basic Serializer for Products"""

	class Meta:
		"""Meta Class"""
		model = Product
		fields = '__all__'


class ProductImageSerializer(serializers.ModelSerializer):
	"""Serializer for creating PRoduct Images"""

	product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all(), required=False)

	class Meta:
		"""Meta Class"""
		model = ProductImage
		fields = '__all__'
