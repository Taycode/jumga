"""Payment Serializers"""

from rest_framework import serializers
from .flutterwave import Flutterwave


class CollectCardDetails(serializers.Serializer):
	"""Serializer for collecting card details"""

	card_number = serializers.CharField(write_only=True)
	cvv = serializers.CharField(write_only=True)
	expiry_month = serializers.CharField(write_only=True)
	expiry_year = serializers.CharField(write_only=True)
	currency = serializers.CharField(default='NGN', write_only=True)
	amount = serializers.CharField(write_only=True, required=False)
	fullname = serializers.CharField(write_only=True)
	email = serializers.EmailField(write_only=True)
	tx_ref = serializers.CharField(write_only=True)
	pin = serializers.CharField(write_only=True)

	def charge_card(self, amount):
		"""Charge Card"""
		self.is_valid(raise_exception=True)
		data = {
			"card_number": self.validated_data.get('card_number'),
			"cvv": self.validated_data.get('cvv'),
			"expiry_month": self.validated_data.get('expiry_month'),
			"expiry_year": self.validated_data.get('expiry_year'),
			"currency": self.validated_data.get('currency'),
			"amount": amount,
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
