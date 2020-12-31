from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
	"""Custom User Model"""
	role_choices = (
		('rider', 'rider'),
		('seller', 'seller'),
		('admin', 'admin'),
		('superuser', 'superuser')
	)

	DEFAULT_USER_ROLE = 'seller'

	role = models.CharField(max_length=16, choices=role_choices, default=DEFAULT_USER_ROLE)
