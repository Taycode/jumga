"""Payment Serializers"""

import random
import string
from rest_framework import serializers
from .flutterwave import Flutterwave
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
	pin = serializers.CharField(write_only=True)

	@staticmethod
	def get_random_string(length=16):
		"""Generate Random String"""
		letters = string.ascii_lowercase
		result_str = ''.join(random.choice(letters) for i in range(length))
		result_str = f'jumga_{result_str}'
		transactions = Transaction.objects.filter(jumga_reference=result_str)

		while transactions.exists():
			result_str = ''.join(random.choice(letters) for i in range(length))
			result_str = f'jumga_{result_str}'
			transactions = Transaction.objects.filter(jumga_reference=result_str)

		return result_str

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
			"tx_ref": self.get_random_string(),
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
