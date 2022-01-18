from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.apps import apps

from .serializer import serializers_classes


@api_view(['GET'])
def select_get(request, model_name):
	model = apps.get_model(app_label='selects', model_name=model_name)
	obj = model.objects.all()
	serializer = serializers_classes.get(model_name)(obj, many=True)
	return Response(serializer.data)
