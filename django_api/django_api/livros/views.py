from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from .models import Livro

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
def livro_detalhado(request, id):
    livro = get_object_or_404(Livro, id=id)
    return render(request, 'livro_detalhado.html', {'livro': livro})