"""Payment Serializers"""

from rest_framework import serializers
from .flutterwave import Flutterwave
from orders.models import Order
from .models import Transaction


class ChargeCardSerializer(serializers.Serializer):
	"""Serializer for collecting card details"""

	card_number = serializers.CharField(write_only=True)
	cvv = serializers.CharField(write_only=True)
	expiry_month = serializers.CharField(write_only=True)
	expiry_year = serializers.CharField(write_only=True)
	currency = serializers.CharField(default='NGN', write_only=True)
	amount = serializers.CharField(write_only=True)
	fullname = serializers.CharField(write_only=True)
	email = serializers.EmailField(write_only=True)
	tx_ref = serializers.CharField(write_only=True)
	pin = serializers.CharField(write_only=True)

	def charge_card(self):
		"""Charge Card"""
		self.is_valid(raise_exception=True)
		data = {
			"card_number": self.validated_data.get('card_number'),
			"cvv": self.validated_data.get('cvv'),
			"expiry_month": self.validated_data.get('expiry_month'),
			"expiry_year": self.validated_data.get('expiry_year'),
			"currency": self.validated_data.get('currency'),
			"amount": self.validated_data.get('amount'),
			"fullname": self.validated_data.get('fullname'),
			"email": self.validated_data.get('email'),
			"tx_ref": self.validated_data.get('tx_ref'),
			"authorization": {
				"mode": "pin",
				"pin": self.validated_data.get('pin')
			}
		}
		flutterwave = Flutterwave()
		response = flutterwave.charge_card(data)
		return response

	def create(self, validated_data):
		"""Create Method"""
		pass

	def update(self, instance, validated_data):
		"""Update Method"""
		pass


class ValidateCardChargeSerializer(serializers.Serializer):
	"""Serializer for confirming payment"""

	otp = serializers.CharField()
	flw_ref = serializers.CharField()

	def validate_charge(self):
		"""Validate charge"""
		self.is_valid(raise_exception=True)
		flutterwave = Flutterwave()
		flw_ref = self.validated_data.get('flw_ref')
		otp = self.validated_data.get('otp')
		response = flutterwave.validate_charge(flw_ref, otp)
		return response

	def update(self, instance, validated_data):
		"""Update Method"""
		pass

	def create(self, validated_data):
		"""Create Method"""
		pass


class PayForCheckoutWithCardSerializer(ValidateCardChargeSerializer):
	"""Serializer for pay for checkouts with card"""

	order_id = serializers.IntegerField(write_only=True)

	def update(self, instance, validated_data):
		"""Update Method"""
		payment_response = self.validate_charge()
		amount = payment_response.get('data').get('amount')
		jumga_reference = payment_response.get('data').get('tx_ref')
		flutterwave_reference = payment_response.get('data').get('flw_ref')

		transaction = Transaction.objects.create(
			flutterwave_reference=flutterwave_reference,
			jumga_reference=jumga_reference,
			amount=amount,
			transaction_type='product_purchase',
		)

		instance.transaction = transaction
		instance.save()
		return instance
