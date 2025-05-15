from django.contrib import admin
from django.urls import path, include
from . import views
from django.urls import path
from . import views

urlpatterns = [
    path('generos/', views.GeneroList.as_view(), name='genero-list'),
    path('generos/<int:pk>/', views.GeneroDetail.as_view(), name='genero-detail'),
    path('livros/', views.LivroList.as_view(), name='livro-list'),
    path('livros/<int:pk>', views.LivroDetail.as_view(), name='livro-detail'),
] 
