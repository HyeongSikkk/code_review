from django.urls import path
from .views import generate_review

urlpatterns = [
    path("review", generate_review, name="generate_review"),
]   