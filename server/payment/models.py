"""Transaction models"""

from django.db import models
from django.contrib.auth import get_user_model
from products.models import Product
from .choices import DEFAULT_CHARGE_TYPE, charge_type_choices

User = get_user_model()


class Transaction(models.Model):
	"""Transaction model"""

	flutterwave_reference = models.CharField(max_length=64, blank=False)
	jumga_reference = models.CharField(max_length=64, blank=False)
	amount = models.DecimalField(max_digits=16, decimal_places=2, blank=False)
	date = models.DateTimeField(auto_now_add=True)
	transaction_type = models.CharField(max_length=64, blank=False)
	charge_type = models.CharField(
		max_length=16, blank=False,
		default=DEFAULT_CHARGE_TYPE,
		choices=charge_type_choices
	)
	user_involved = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)

	def __str__(self):
		return self.jumga_reference
