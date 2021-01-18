"""Rider App Serializer"""


from rest_framework import serializers
from .models import Delivery
from .choices import status_choices
import datetime
from users.serializers import UserProfileSerializer
from orders.serializers import RetrieveOrderSerializer


class ListDeliverySerializer(serializers.ModelSerializer):
	"""Serializer for listing Deliveries"""

	store_name = serializers.ReadOnlyField(source='order.product.store.name')
	address = serializers.ReadOnlyField(source='order.order.address')
	product_name = serializers.ReadOnlyField(source='order.product.name')
	rider = UserProfileSerializer()

	class Meta:
		"""Meta Class"""
		model = Delivery
		fields = ('id', 'order', 'store_name', 'address', 'product_name', 'rider', 'status')


class RetrieveDeliverySerializer(serializers.ModelSerializer):
	"""Serializer for listing Deliveries"""

	store_name = serializers.ReadOnlyField(source='order.product.store.name')
	product_name = serializers.ReadOnlyField(source='order.product.name')
	rider = UserProfileSerializer()
	order = RetrieveOrderSerializer(source='order.order')
	rider_commission = serializers.ReadOnlyField(source='order.rider_commission')

	class Meta:
		"""Meta Class"""
		model = Delivery
		fields = ('id', 'order', 'store_name', 'product_name', 'rider', 'status', 'rider_commission')


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
