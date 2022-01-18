from django.urls import path


from .views import get_product, get_products, post_image, post_product


urlpatterns = [
	path('', get_products),
	path('<int:id>', get_product),
	path('add/', post_product),
	path('image/add/', post_image),
]
