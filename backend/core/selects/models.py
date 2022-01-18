from django.db import models

class EstateType(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Type(models.Model):
	name = models.CharField(max_length=24)
	done = models.CharField(max_length=24)

	def __str__(self):
		return self.name

class Status(models.Model):
	name = models.CharField(max_length=24)

	def __str__(self):
		return self.name
		
class HeatingType(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self):
		return self.name
		
class Floor(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name


class Floors(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class ToiletNumber(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name
		
class Bedrooms(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name
		
class Bathrooms(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Year_of_build(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name
		
class Floor_type(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class New_or_used(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Rooms(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Object_type(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Toilet(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Kitchen(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Road(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Garage_type(models.Model):
	name = models.CharField(max_length=30)
	
	def __str__(self):
		return self.name

class Vehicle_capacity(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name

class Building_type(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name
		
class Building_material(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name
		
class Building_usage(models.Model):
	name = models.CharField(max_length=24)
	
	def __str__(self):
		return self.name