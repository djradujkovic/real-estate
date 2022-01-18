from rest_framework import serializers

from .models import Product, ProductImages

from selects.models import Type, EstateType, Status, HeatingType
from django.apps import apps

from selects.serializer import serializers_classes

# class TypeSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = Type
# 		fields = '__all__'
# class EstateTypeSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = EstateType
# 		fields = '__all__'

# class StatusSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = Status
# 		fields = '__all__'
# class HeatingTypeSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = HeatingType
# 		fields = '__all__'
class ImageSerializer(serializers.ModelSerializer):
	# url = f'http://localhost:8000/media/images/{image}'
	class Meta:
		model = ProductImages
		fields = '__all__'
names = {
	'EstateType': 'estate_type',
	'Type': 'type',
	'Status': 'status',
	'HeatingType': 'heating_type',
	'Floor': 'floor',
	'Floors': 'floors',
	'ToiletNumber': 'toilet_number',
	'Bathrooms': 'bathrooms',
	'Bedrooms': 'bedrooms',
	'Year_of_build': 'year_of_build',
	'Floor_type': 'floor_type',
	'New_or_used': 'new_or_used',
	'Rooms': 'rooms',
	'Object_type': 'object_type',
	'Toilet': 'toilets',
	'Kitchen': 'kitchen',
	'Road': 'road',
	'Garage_type': 'garage_type',
	'Vehicle_capacity': 'vehicle_capacity',
	'Building_type': 'building_type',
	'Building_material': 'building_material',
	'Building_usage': 'building_usage'
}

class ProductSerializer(serializers.ModelSerializer):

	for key, value in serializers_classes.items():
		locals()[names[key]] = value(read_only=True)
		locals()[f'{names[key]}_id'] = serializers.IntegerField(write_only=True, default=0)
	
	images = ImageSerializer(source='productimages_set', many=True, read_only=True)
	images_post = serializers.ListField(
                       child=serializers.FileField( max_length=100000,
                                         allow_empty_file=False,
                                         use_url=False), write_only=True, default=list())
	
	def create(self, validated_data):

		changed_data = dict()
		
		models = [model for model in apps.get_models() if model._meta.app_label == 'selects'] 
		for model in models:
			name = names[model.__name__]
			name_id = f'{name}_id'
			if name_id in validated_data:
				deleted_id = validated_data.pop(name_id)
				if deleted_id != 0:
					changed_data[name] = model.objects.get(id = deleted_id)
			else:
				changed_data[name] = None

		images_data = validated_data.pop('images_post')
		product = Product.objects.create(**changed_data, **validated_data)
		if images_data:
			for img in images_data:
				ProductImages.objects.create(product=product, image=img)

		return product

	class Meta:
		model = Product
		# fields = ['id', 'name', 'images', 'images_post']
		fields = '__all__'