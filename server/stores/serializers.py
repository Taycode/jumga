"""Serializers for Stores App"""


from rest_framework import serializers
from .models import Store
from django.contrib.auth import get_user_model
from users.serializers import UserProfileSerializer


User = get_user_model()


class BasicStoreModelSerializer(serializers.ModelSerializer):
	"""Basic Model Serializer for Stores"""

	class Meta:
		"""Meta Class"""
		model = Store
		fields = '__all__'


class ListStoresSerializer(serializers.ModelSerializer):
	"""Serializer for listing stores for a user"""

	def to_representation(self, instance):
		"""Customize response"""
		data = super(ListStoresSerializer, self).to_representation(instance)
		data.update({
			'product_count': instance.product_set.count()
		})
		rider = data.get('rider')
		if rider:
			data.update({
				'rider': UserProfileSerializer(User.objects.get(id=rider)).data
			})
		return data

	class Meta:
		"""Meta class"""
		model = Store
		fields = ('id', 'name', 'rider', )


class CreateStoreSerializer(serializers.Serializer):
	"""USed to create Stores"""

	id = serializers.IntegerField(required=False, read_only=True)
	name = serializers.CharField(max_length=255)
	owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), required=False)

	def update(self, instance, validated_data):
		"""Updates Store"""
		pass

	def create(self, validated_data):
		"""Creates Store"""
		store = Store.objects.create(**validated_data)
		riders = User.objects.filter(role='rider')
		if riders.exists:
			store.rider = riders.first()
			store.save()
		return store

	def to_representation(self, instance):
		"""Customize response"""
		super(CreateStoreSerializer, self).to_representation(instance)
		data = ListStoresSerializer(instance).data
		return data


class AssignRiderToStoreSerializer(serializers.Serializer):
	"""Serializer for assigning Rider to Store"""

	store_id = serializers.IntegerField(write_only=True)
	rider_email = serializers.EmailField(write_only=True)

	def create(self, validated_data):
		"""Create Method"""
		pass

	def update(self, instance, validated_data):
		"""Update Method"""
		email = validated_data.get('rider_email')
		rider = User.objects.filter(email=email)

		if not rider.exists():
			raise User.DoesNotExist('Rider Not on Jumga')
		instance.rider = rider.first()
		instance.save()
		return instance
