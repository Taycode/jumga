"""Product Services"""

import requests


class ProductService(object):
	"""Product Service"""

	@staticmethod
	def get_country(ip):
		"""Gets country"""

		url = f'https://ipapi.co/{ip}/json/'

		response = requests.get(url)

		if response.status_code == 200:
			country = response.json().get('country_name')
			return country

		return 'nigeria'
