from django.shortcuts import render

from rest_framework import generics
from .models import Genero, Livro
from .serializers import GeneroSerializer, Livroserializer

class GeneroList (generics.ListCreateAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer
class GeneroDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer
class LivroList(generics.ListCreateAPIView):
    queryset = Livro.objects.all()
    serializer_class = Livroserializer
class LivroDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Livro.objects.all()
    serializer_class = Livroserializer
