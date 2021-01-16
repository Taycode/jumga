"""Flutterwave Library"""

from django.conf import settings
import base64
import json
import requests
from Crypto.Cipher import DES3


class Flutterwave(object):
	"""Flutterwave Class"""

	public_key = settings.FLUTTERWAVE_PUBLIC_KEY
	secret_key = settings.FLUTTERWAVE_SECRET_KEY
	encryption_key = settings.FLUTTERWAVE_ENCRYPTION_KEY
	base_url = 'https://api.flutterwave.com/v3'

	def __encrypt_data(self, payload):
		block_size = 8
		pad_diff = block_size - (len(payload) % block_size)
		cipher = DES3.new(self.encryption_key, DES3.MODE_ECB)
		plain_text = "{}{}".format(payload, "".join(chr(pad_diff) * pad_diff))
		encrypted = base64.b64encode(cipher.encrypt(plain_text))
		return encrypted.decode()

	def make_request(self, url, data=None, method="POST"):
		"""

		:param url: string
		:param data: dictionary
		:param method: string
		:return: json
		"""

		requester = None
		if method == "POST":
			requester = requests.post
		elif method == "GET":
			requester = requests.get

		headers = {
			'Authorization': f'Bearer {self.secret_key}',
			'Content-Type': 'application/json'
		}

		response = requester(url, data, headers=headers)
		return response

	def charge_card(self, data):
		"""

		:param data: dictionary
		:return: json data, Dictionary
		"""

		encrypted_data = self.__encrypt_data(json.dumps(data))

		post_data = {
			"client": encrypted_data,
		}

		endpoint = self.base_url + '/charges?type=card'

		response = self.make_request(endpoint, json.dumps(post_data))

		return response

	def validate_charge(self, flw_ref, otp):
		"""
		:param flw_ref: string
		:param otp: string
		"""

		data = {
			'flw_ref': flw_ref,
			'otp': otp
		}

		endpoint = self.base_url + '/validate-charge'

		response = self.make_request(endpoint, json.dumps(data))

		return response

	def verify_transaction(self, transaction_id):
		"""
		:param transaction_id: integer
		:return response object
		"""

		endpoint = self.base_url + f'/transactions/{transaction_id}/verify/'

		response = self.make_request(endpoint, method="GET")

		return response

	def create_a_transfer(self, data):
		"""
		:param data: dictionary

		{
			'account_bank': '',
			'account_number': '',
			'amount': '',
			'currency': ''
		}
		"""

		endpoint = self.base_url + '/transfers'

		response = self.make_request(endpoint, json.dumps(data))

		return response

	def get_a_transfer(self, transfer_id):
		"""
		:param transfer_id: integer, ID of transfer
		"""

		endpoint = self.base_url + f'/transfers/{transfer_id}'

		response = self.make_request(endpoint, method='GET')

		return response
