"""Serializers for User APP"""


from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from .models import User
from .choices import role_choices, DEFAULT_USER_ROLE
from products.models import Product
from payment.flutterwave import Flutterwave


class SuperUserCreateSerializer(serializers.Serializer):
	"""Serializer for Creating Super Users"""

	username = serializers.CharField(max_length=255, required=True)
	password = serializers.CharField(max_length=255, write_only=True, required=True)

	@staticmethod
	def validate_username(username):
		"""

		:param username: string (username of user)
		:return: string (cleaned username of user)
		"""
		return username.lower()

	def create(self, validated_data):
		"""

		:param validated_data: dict
		:return: User
		"""
		username = validated_data.get('username')
		password = validated_data.get('password')

		admin = User.objects.create_superuser(username, password=password)
		admin.is_active = True
		admin.is_admin = True
		admin.save()

		return admin

	def update(self, instance, validated_data):
		"""

		:param instance: User
		:param validated_data: dict
		:return:
		"""
		pass


class UserEditSerializer(serializers.ModelSerializer):
	"""Serializer for Editing Users DAta"""

	username = serializers.CharField(required=False, max_length=255)

	class Meta:
		"""Meta Class"""
		model = User
		fields = ('username', 'email', 'role', 'first_name', 'last_name', 'country')


class CustomRegisterSerializer(RegisterSerializer):
	"""Custom Register Serializer"""

	role = serializers.ChoiceField(role_choices, default=DEFAULT_USER_ROLE)
	first_name = serializers.CharField(max_length=255, required=True)
	last_name = serializers.CharField(max_length=255, required=True)
	country = serializers.CharField(max_length=255, required=False)

	def update(self, instance, validated_data):
		"""

		:param instance:
		:param validated_data:
		:return:
		"""
		pass

	def create(self, validated_data):
		"""

		:param validated_data:
		:return:
		"""
		pass

	def custom_signup(self, request, user):
		"""

		:param request: request object
		:param user: User object
		:return: User Object
		"""
		data = {
			'role': self.validated_data.get('role'),
			'first_name': self.validated_data.get('first_name'),
			'last_name': self.validated_data.get('last_name'),
			'country': self.validated_data.get('country')
		}
		serializer = UserEditSerializer(instance=user, data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save()
		return serializer.instance


class UserDetailsSerializer(serializers.ModelSerializer):
	"""This is used to get User Details data"""

	def to_representation(self, instance):
		"""Customize Response"""
		data = super(UserDetailsSerializer, self).to_representation(instance)
		if instance.role == 'seller':
			data.update({
				'stores_count': instance.store_set.count(),
				'product_count': Product.objects.filter(store__owner=instance).count(),
				'sales': 0,
				'balance': 0,
				'earnings': 0
			})
		return data

	class Meta:
		"""Meta Class"""

		model = User
		fields = (
			'first_name',
			'last_name',
			'role',
			'email',
			'country',
			'account_name',
			'account_bank',
			'account_number'
		)


class UpdateBankDetailSerializer(serializers.ModelSerializer):
	"""Serializer for updating serializer"""

	class Meta:
		"""Meta Class"""

		model = User
		fields = (
			'id',
			'account_bank',
			'account_name',
			'account_number',
		)


class VerifyUserSerializer(serializers.Serializer):
	"""Serializer for Verifying a user"""

	transaction_id = serializers.IntegerField(write_only=True)
	id = serializers.IntegerField(read_only=True)
	verified = serializers.BooleanField(read_only=True)

	def create(self, validated_data):
		"""Create Method"""
		pass

	def update(self, instance, validated_data):
		"""Update Method"""
		flutterwave = Flutterwave()

		transaction_id = validated_data.get('transaction_id')

		response = flutterwave.verify_transaction(transaction_id)

		if response.status_code == 200:
			response = response.json()
			if response.get('data').get('status') == 'successful':
				instance.verified = True
				instance.save()

		return instance
