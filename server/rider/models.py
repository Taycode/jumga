"""Models for rider"""
from django.db import models
from django.contrib.auth import get_user_model
from orders.models import Order
from .choices import status_choices, DEFAULT_STATUS


User = get_user_model()


class Delivery(models.Model):
	"""Deliveries assigned to a rider"""

	rider = models.ForeignKey(User, on_delete=models.CASCADE)
	order = models.ForeignKey(Order, on_delete=models.CASCADE)
	status = models.CharField(max_length=32, choices=status_choices, default=DEFAULT_STATUS)
	delivered_time = models.DateTimeField(blank=True)
