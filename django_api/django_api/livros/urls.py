from django.contrib import admin
from django.urls import path, include
from . import views
from django.urls import path
from . import views
from .views import livro_detalhado

urlpatterns = [
    path('livros/<int:id>/', livro_detalhado, name='livro_detalhado'),
    path('generos/', views.GeneroList.as_view(), name='genero-list'),
    path('livros/genero/<str:genero>', views.livros_por_categoria, name='livros_por_categoria'),
    path('generos/<int:pk>/', views.GeneroDetail.as_view(), name='genero-detail'),
    path('livros/', views.LivroList.as_view(), name='livro-list'),
    path('livros/<int:pk>', views.LivroDetail.as_view(), name='livro-detail'),
] 
