from django.shortcuts import render

from rest_framework import generics
from .models import Genero, livro
from .serializers import GeneroSerializer, livroserializer

class GeneroList (generics.ListCreateAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer
class GeneroDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Genero.objects.all()
    serializer_class = GeneroSerializer
class livroList(generics.ListCreateAPIView):
    queryset = livro.objects.all()
    serializer_class = livroserializer
class livroDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = livro.objects.all()
    serializer_class = livroserializer
