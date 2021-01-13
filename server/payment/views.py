"""Payment Views"""

from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ChargeCardSerializer, ValidateCardChargeSerializer


class ChargeCardAPIView(APIView):
	"""View for charging card"""

	serializer_class = ChargeCardSerializer

	def post(self, request):
		"""Post method"""
		serializer = self.serializer_class(data=request.data)
		if serializer.is_valid():
			response = serializer.charge_card()
			return Response(response.json(), status=response.status_code)
		else:
			return Response(serializer.errors, status=400)


class ValidateCardChargeAPIView(APIView):
	"""View for Validating Card Charge"""

	serializer_class = ValidateCardChargeSerializer

	def post(self, request):
		"""POST Request"""
		serializer = self.serializer_class(data=request.data)
		if serializer.is_valid():
			response = serializer.validate_charge()
			return Response(response.json(), status=response.status_code)
		else:
			return Response(serializer.errors, status=400)

