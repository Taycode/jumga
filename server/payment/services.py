"""Payment Services"""

from .choices import countries_to_currencies
from .flutterwave import Flutterwave


class PaymentService(object):
	"""Payment Service Module"""

	@staticmethod
	def get_rates(country_from):
		"""GEt rates for each currency jumga supports"""
		from_currency = countries_to_currencies.get(country_from)
		# currencies = list(countries_to_currencies.values())
		flutterwave = Flutterwave()
		rates = dict()

		for key, value in countries_to_currencies.items():
			rate = flutterwave.get_fx_rates(from_currency, value, 1).json().get('data').get('rate')

			rates[key] = float(rate)

		return rates
