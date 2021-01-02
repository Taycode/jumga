"""Models For Product apps"""
from django.db import models
from cloudinary.models import CloudinaryField
from stores.models import Store


class Product(models.Model):
	"""Product Model"""

	name = models.CharField(max_length=255)
	price = models.BigIntegerField()
	description = models.TextField(blank=True)
	store = models.ForeignKey(Store, on_delete=models.CASCADE)


class ProductImage(models.Model):
	"""Images belonging to a product"""
	image = CloudinaryField('image')
	product = models.ForeignKey(Product, on_delete=models.CASCADE)
