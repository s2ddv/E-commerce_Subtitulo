from django.contrib import admin
from django.urls import path, include
from . import views
from django.urls import path
from . import views

urlpatterns = [
    path('', views.lista_livros),
    path('generos/', views.GeneroList.as_view(), name='genero-list'),
    path('generos/<int:pk>/', views.GeneroDetail.as_view(), name='genero-detail'),
    path('livros/', views.livroList.as_view(), name='livro-list'),
    path('livros/<int:pk>', views.livroDetail.as_view(), name='livro-detail'),
] 
