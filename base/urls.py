from django.urls import path
from .views import meme_generator
urlpatterns = [
    path('', meme_generator)
]