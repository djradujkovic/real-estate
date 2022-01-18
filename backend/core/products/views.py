from .serializers import ImageSerializer, ProductSerializer

from .models import Product

from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def get_products(request):
	products = Product.objects.all()
	serializer = ProductSerializer(products, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def get_product(request, id):
	product = Product.objects.get(id=id)
	serializer = ProductSerializer(product, many=False)
	return Response(serializer.data)

@api_view(['POST'])
def post_product(request):
	print(request.data)
	serializer = ProductSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)

@api_view(['POST'])
def post_image(request):
	# print(request.data)
	serializer = ImageSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)

# @api_view(['GET'])
# def get_types(request):
# 	types = Type.objects.all()
# 	serializer = TypeSerializer(types, many=True)
# 	return Response(serializer.data)

# @api_view(['GET'])
# def get_estate_types(request):
# 	types = EstateType.objects.all()
# 	serializer = EstateTypeSerializer(types, many=True)
# 	return Response(serializer.data)

# @api_view(['GET'])
# def get_stats(request):
# 	status = Status.objects.all()
# 	serializer = StatusSerializer(status, many=True)
# 	return Response(serializer.data)
	
# @api_view(['GET'])
# def get_heating_types(request):
# 	types = HeatingType.objects.all()
# 	serializer = HeatingTypeSerializer(types, many=True)
# 	return Response(serializer.data)