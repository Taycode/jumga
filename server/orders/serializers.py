"""Order App serializers"""


from rest_framework import serializers
from products.models import Product
from orders.models import ProductsInCart


class AddToCartSerializer(serializers.Serializer):
	"""Serializer for adding to cart"""

	product = serializers.PrimaryKeyRelatedField(read_only=True)
	product_id = serializers.IntegerField(write_only=True)
	quantity = serializers.IntegerField()

	def create(self, validated_data):
		"""Create Method"""
		product = Product.objects.get(id=validated_data.get('product_id'))
		product_in_cart = ProductsInCart.objects.create(
			product=product,
			quantity=validated_data.get('quantity'),
			user=validated_data.get('user')
		)
		return product_in_cart

	def update(self, instance, validated_data):
		"""Update MEthod"""
		pass


class ViewCartSerializer(serializers.ModelSerializer):
	"""Serializer for viewing Cart"""

	class Meta:
		"""Meta Class"""

		model = ProductsInCart
		fields = ('id', 'product', 'quantity')


class BasicCartSerializer(serializers.ModelSerializer):
	"""Basic Serializer for products in Cart"""

	class Meta:
		"""Meta Class"""

		model = ProductsInCart
		fields = '__all__'
