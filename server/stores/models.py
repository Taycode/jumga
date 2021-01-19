"""Models for Stores app"""
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Store(models.Model):
	"""Model for Store"""

	name = models.CharField(max_length=255)
	owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
	rider = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='rider')
