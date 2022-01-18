from django.urls import path


from .views import select_get 


urlpatterns = [
	path('<str:model_name>/', select_get),
]
