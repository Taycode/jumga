from django.db import models
from django.contrib.auth.models import AbstractUser
from .choices import role_choices, DEFAULT_USER_ROLE, country_choices, DEFAULT_COUNTRY_CHOICE


class User(AbstractUser):
	"""Custom User Model"""

	role = models.CharField(max_length=16, choices=role_choices, default=DEFAULT_USER_ROLE)
	country = models.CharField(max_length=16, choices=country_choices, default=DEFAULT_COUNTRY_CHOICE)
