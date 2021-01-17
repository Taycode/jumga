"""Models for rider"""
from django.db import models
from django.contrib.auth import get_user_model
from orders.models import ProductsInOrder
from .choices import status_choices, IN_SHOP


User = get_user_model()


class Delivery(models.Model):
	"""Deliveries assigned to a rider"""

	rider = models.ForeignKey(User, on_delete=models.CASCADE)
	order = models.ForeignKey(ProductsInOrder, on_delete=models.CASCADE)
	status = models.CharField(max_length=32, choices=status_choices, default=IN_SHOP)
	delivered_time = models.DateTimeField(blank=True, null=True)
