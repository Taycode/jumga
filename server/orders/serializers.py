"""Order App serializers"""


from rest_framework import serializers
from products.models import Product
from orders.models import Order, ProductsInOrder
from payment.models import Transaction
from rider.models import Delivery
from .services import OrderServices
from users.choices import country_choices, DEFAULT_COUNTRY_CHOICE
from users.serializers import UserProfileSerializer


class ViewOrderSerializer(serializers.ModelSerializer):
	"""Serializer for viewing details about an order"""

	class Meta:
		"""Meta Class"""
		model = Order
		fields = '__all__'
		depth = 1


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
		price = float(quantity) * float(product.price)
		delivery_fee = 0.075 * price
		return ProductsInOrder.objects.create(
			product=product, order=order,
			quantity=quantity, total_cost=price,
			delivery_fee=delivery_fee
		)

	def update(self, instance, validated_data):
		"""Update Method"""
		pass


class CreateOrderOnCheckoutSerializer(serializers.Serializer):
	"""Serializer for making orders"""

	id = serializers.IntegerField(read_only=True)
	orders = serializers.ListField(child=serializers.DictField(), write_only=True)
	country = serializers.ChoiceField(country_choices, default=DEFAULT_COUNTRY_CHOICE)
	address = serializers.CharField()
	phone_number = serializers.CharField()
	email = serializers.CharField()
	total_cost = serializers.DecimalField(read_only=True)
	name = serializers.CharField()
	delivery_fee = serializers.DecimalField(read_only=True)

	def create(self, validated_data):
		"""Create Method"""
		address = validated_data.get('address')
		email = validated_data.get('email')
		phone_number = validated_data.get('phone_number')
		name = validated_data.get('name')
		order = Order.objects.create(
			address=address,
			phone_number=phone_number,
			email=email,
			name=name
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
		instance.paid = True
		instance.transaction = transaction
		instance.save()

		# Create Delivery for rider

		products_in_order = ProductsInOrder.objects.filter(order=instance)
		order_services = OrderServices()

		for _ in products_in_order:

			rider = _.product.store.rider
			order_services.calculate_commissions(_)
			order_services.process_transaction_for_each_product_order(_)

			if rider:
				Delivery.objects.create(
					rider=rider,
					order=_,
				)

		return instance


class RetrieveAndListProductsInOrderSerializer(serializers.ModelSerializer):
	"""Serializer for List of products in orders"""
	rider = UserProfileSerializer(source='product.store.rider')
	delivery_status = serializers.ReadOnlyField(source='delivery.status')

	class Meta:
		"""Meta Class"""

		model = ProductsInOrder
		fields = '__all__'
		depth = 1


class RetrieveOrderSerializer(serializers.ModelSerializer):
	"""Serializer for retrieving data for an order"""

	class Meta:
		"""Meta Class"""
		model = Order
		fields = '__all__'
