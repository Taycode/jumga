"""Order App serializers"""


from rest_framework import serializers
from products.models import Product
from orders.models import ProductsInCart, Order, ProductsInOrder
from payment.models import Transaction
from payment.serializers import ChargeCardSerializer
from orders.mixins import OrderProductMixin
from payment.flutterwave import Flutterwave


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


class MakeOrderWithCardSerializer(OrderProductMixin, ChargeCardSerializer):
	"""Make Order with Card Serializer"""

	address = serializers.CharField()

	def create(self, validated_data):
		"""Create Order"""
		user = validated_data.get('user')
		amount = int(validated_data.get('amount'))
		payment_response = self.charge_card()
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
		self.create_product_in_orders(user, order)
		return order


class CreateProductInOrderSerializer(serializers.Serializer):
	"""Serializer for creating products in orders"""
	product_id = serializers.IntegerField(write_only=True)
	product = serializers.PrimaryKeyRelatedField(read_only=True)
	quantity = serializers.IntegerField()
	order_id = serializers.IntegerField(write_only=True, required=False)
	order = serializers.PrimaryKeyRelatedField(read_only=True)

	def create(self, validated_data):
		"""Create Method"""
		order = Order.objects.get(id=validated_data.get('order_id'))
		product = Product.objects.get(id=validated_data.get('product_id'))
		quantity = validated_data.get('quantity')
		return ProductsInOrder.objects.create(product=product, order=order, quantity=quantity)

	def update(self, instance, validated_data):
		"""Update Method"""
		pass


class CreateOrderOnCheckoutSerializer(serializers.Serializer):
	"""Serializer for making orders"""

	id = serializers.IntegerField(read_only=True)
	orders = serializers.ListField(child=serializers.DictField(), write_only=True)
	country = serializers.CharField()
	address = serializers.CharField()
	phone_number = serializers.CharField()
	email = serializers.CharField()
	total_cost = serializers.IntegerField(read_only=True)

	def create(self, validated_data):
		"""Create Method"""
		address = validated_data.get('address')
		email = validated_data.get('email')
		phone_number = validated_data.get('phone_number')
		order = Order.objects.create(
			address=address,
			phone_number=phone_number,
			email=email
		)
		orders = validated_data.get('orders')
		product_in_order_serializer = CreateProductInOrderSerializer(data=orders, many=True)
		product_in_order_serializer.is_valid(raise_exception=True)
		product_in_order_serializer.save(order_id=order.id)

		# calculates total cost and saves
		order.get_total_cost()

		return order

	def update(self, instance, validated_data):
		"""Update Method"""
		pass


class ViewTransactionSerializer(serializers.ModelSerializer):
	"""Serializer for Viewing Transactions"""

	class Meta:
		"""MEta Class"""
		model = Transaction
		fields = ('flutterwave_reference', 'jumga_reference', 'amount', 'date', 'transaction_type', )


class ConfirmOrderPaymentSerializer(serializers.Serializer):
	"""Serializer for confirming an order has been paid for"""

	transaction = serializers.PrimaryKeyRelatedField(read_only=True)
	order_id = serializers.IntegerField(write_only=True)
	flutterwave_reference = serializers.CharField(write_only=True)
	jumga_reference = serializers.CharField(write_only=True)

	def to_representation(self, instance):
		"""Customize response"""
		data = super(ConfirmOrderPaymentSerializer, self).to_representation(instance)
		return ViewTransactionSerializer(Transaction.objects.get(id=data.get('transaction'))).data

	def create(self, validated_data):
		"""Create Method"""
		pass

	def update(self, instance, validated_data):
		"""Update method"""

		flutterwave_reference = validated_data.get('flutterwave_reference')
		jumga_reference = validated_data.get('jumga_reference')
		order = Order.objects.get(id=validated_data.get('order_id'))

		transaction = Transaction.objects.create(
			flutterwave_reference=flutterwave_reference,
			jumga_reference=jumga_reference,
			amount=order.total_cost,
			transaction_type='product_purchase',
		)

		instance.transaction = transaction
		instance.save()
		return instance
