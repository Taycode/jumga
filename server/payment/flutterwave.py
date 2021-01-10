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

		return response.json()

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

		return response.json()
