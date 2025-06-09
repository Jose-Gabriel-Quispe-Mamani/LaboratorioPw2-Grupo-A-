# correo/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('enviar/', views.enviar_correo, name='enviar_correo'),
]
