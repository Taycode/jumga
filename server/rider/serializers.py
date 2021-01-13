"""Rider App Serializer"""


from rest_framework import serializers
from .models import Delivery
from .choices import status_choices
import datetime


class ListDeliverySerializer(serializers.ModelSerializer):
	"""Serializer for listing Deliveries"""

	class Meta:
		"""Meta Class"""
		model = Delivery
		exclude = ('rider', )
		depth = 1


class UpdateDeliveryStatusSerializer(serializers.Serializer):
	"""Serializer for updating Delivery status"""

	status = serializers.ChoiceField(status_choices)
	id = serializers.IntegerField(read_only=True)

	def create(self, validated_data):
		"""Create Method"""
		pass

	def update(self, instance, validated_data):
		"""Update MEthod"""
		self.is_valid(raise_exception=True)
		instance.status = validated_data.get('status')
		if instance.status == 'delivered':
			instance.delivery_time = datetime.datetime.now()
		instance.save()
		return instance
