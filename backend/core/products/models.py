from django.db import models

from PIL import Image, ExifTags


# from django.apps import apps
# modelss = [model for model in apps.get_models() if model._meta.app_label == 'selects']
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
class Product(models.Model):
	name = models.CharField(max_length=50)
	address = models.CharField(max_length=50)

	for key, value in names.items():
		locals()[value] = models.ForeignKey(to=f'selects.{key}', on_delete=models.SET_NULL, null=True, blank=True, default=None)

	price = models.IntegerField(null=True, blank=True)
	size = models.IntegerField(null=True, blank=True)
	
	homepage = models.BooleanField(default=False)
	positionX =  models.FloatField(default=44.7768313)
	positionY = models.FloatField(default=17.1933091)
	done = models.BooleanField(default=False)

	inProgress = models.BooleanField(default=False)
	elevator = models.BooleanField(default=False)
	balcony = models.BooleanField(default=False)
	parking = models.BooleanField(default=False)
	garage = models.BooleanField(default=False)
	# year_of_build = models.IntegerField(null=True, blank=True)
	pets = models.BooleanField(default=False)


	deposit = models.IntegerField(null=True, blank=True)
	pay_period = models.IntegerField(null=True, blank=True)
	min_period = models.IntegerField(null=True, blank=True)
	available = models.DateField(null=True, blank=True, default=None)

	price_allow = models.BooleanField(default=False)
	# toilets = models.IntegerField(default=0)
	# level = models.IntegerField(null=True, blank=True)
	size_out = models.IntegerField(null=True, blank=True)
	size_all = models.IntegerField(null=True, blank=True)

	paper = models.BooleanField(default=False)
	cameras = models.BooleanField(default=False)
	alarm = models.BooleanField(default=False)
	storage = models.BooleanField(default=False)
	ac = models.BooleanField(default=False)
	armed_door = models.BooleanField(default=False)
	phone = models.BooleanField(default=False)
	internet = models.BooleanField(default=False)
	tv = models.BooleanField(default=False)
	basement = models.BooleanField(default=False)
	updated = models.BooleanField(default=False)

	invoice_included = models.BooleanField(default=False) 

	stockroom = models.BooleanField(default=False)

	from_river = models.IntegerField(null=True, blank=True)

	automatic_door = models.BooleanField(default=False)

	pool = models.BooleanField(default=False)

	comment = models.TextField(null=True, blank=True)

	


	created_at = models.DateTimeField(auto_now_add=True, null=True)
	updated_at = models.DateTimeField(auto_now=True, null=True)

	def __str__(self):
		return self.name
	
class ProductImages(models.Model):
	product = models.ForeignKey(to=Product, on_delete=models.CASCADE)
	# url = models.URLField()
	image = models.ImageField()


	def save(self, *args, **kwargs):
		super().save(*args, **kwargs)
		# img = Image.open(self.image.path)

		# if img.height > 800 or img.width > 800:
		# 	output_size = (800,800)
		# 	img.thumbnail(output_size)
		# 	img.save(self.image.path)

		try :
			image=Image.open(self.image.path)
			for orientation in ExifTags.TAGS.keys() : 
				if ExifTags.TAGS[orientation]=='Orientation' : break 
			exif=dict(image._getexif().items())

			if   exif[orientation] == 3 : 
				image=image.rotate(180, expand=True)
			elif exif[orientation] == 6 : 
				image=image.rotate(270, expand=True)
			elif exif[orientation] == 8 : 
				image=image.rotate(90, expand=True)

			image.thumbnail((1000 , 1000), Image.ANTIALIAS)
			image.save(self.image.path)
		except:
			print('error')

	# def __str__(self):
		# return self.image