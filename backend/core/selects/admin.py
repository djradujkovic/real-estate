from django.contrib import admin
from django.apps import apps
# Register your models here.
models = [model for model in apps.get_models() if model._meta.app_label == 'selects']
for model in models:
	admin.site.register(model)