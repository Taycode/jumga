"""User Model"""
from django.db import models
from django.contrib.auth.models import AbstractUser
from .choices import role_choices, DEFAULT_USER_ROLE, country_choices, DEFAULT_COUNTRY_CHOICE


class User(AbstractUser):
	"""Custom User Model"""

	role = models.CharField(max_length=16, choices=role_choices, default=DEFAULT_USER_ROLE)
	country = models.CharField(max_length=16, choices=country_choices, default=DEFAULT_COUNTRY_CHOICE)
	account_bank = models.CharField(max_length=8, blank=True, null=True)
	account_name = models.CharField(max_length=64, blank=True, null=True)
	account_number = models.CharField(max_length=16, blank=True, null=True)
	verified = models.BooleanField(default=False)
	withdrawn = models.BigIntegerField(default=0)
	balance = models.BigIntegerField(default=0)
