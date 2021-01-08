"""Payment Serializers"""

from rest_framework import serializers
from .flutterwave import Flutterwave


class CollectCardDetails(serializers.Serializer):
	"""Serializer for collecting card details"""

	card_number = serializers.CharField()
	cvv = serializers.CharField()
	expiry_month = serializers.CharField()
	expiry_year = serializers.CharField()
	currency = serializers.CharField(default='NGN')
	amount = serializers.CharField()
	fullname = serializers.CharField()
	email = serializers.EmailField()
	tx_ref = serializers.CharField()
	pin = serializers.CharField()

	def charge_card(self):
		"""Charge Card"""
		self.is_valid(raise_exception=True)
		data = {
			"card_number": self.validated_data('card_number'),
			"cvv": self.validated_data('cvv'),
			"expiry_month": self.validated_data('expiry_month'),
			"expiry_year": self.validated_data('expiry_year'),
			"currency": self.validated_data('currency'),
			"amount": self.validated_data('amount'),
			"fullname": self.validated_data('fullname'),
			"email": self.validated_data('email'),
			"tx_ref": self.validated_data('tx_ref'),
			"authorization": {
				"mode": "pin",
				"pin": self.validated_data('pin')
			}
		}
		flutterwave = Flutterwave()
		response = flutterwave.charge_card(data)
		print(response)
		return response

	def create(self, validated_data):
		"""Create Method"""
		pass

	def update(self, instance, validated_data):
		"""Update Method"""
		pass
