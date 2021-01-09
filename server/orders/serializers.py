"""Order App serializers"""


from rest_framework import serializers
from products.models import Product
from orders.models import ProductsInCart, Order
from payment.models import Transaction
from payment.serializers import CollectCardDetails
from orders.mixins import OrderProductMixin


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


class MakeOrderWithCardSerializer(OrderProductMixin, CollectCardDetails):
	"""Make Order with Card Serializer"""

	address = serializers.CharField()

	def create(self, validated_data):
		"""Create Order"""
		user = validated_data.get('user')
		amount = int(validated_data.get('amount'))
		payment_response = self.charge_card(amount)
		jumga_reference = payment_response.get('data').get('tx_ref')
		flutterwave_reference = payment_response.get('data').get('flw_ref')

		transaction = Transaction.objects.create(
			flutterwave_reference=flutterwave_reference,
			jumga_reference=jumga_reference,
			amount=amount,
			transaction_type='product_purchase',
			user_involved=user
		)
		order = Order.objects.create(
			transaction=transaction,
			address=validated_data.get('address'),
			total_cost=amount,
			user=user
		)
		return order
