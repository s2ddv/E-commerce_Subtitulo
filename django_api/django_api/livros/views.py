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

def livros_romance(request): 
    livros = Livro.objects.filter(categoria='romance')
    return render(request, 'livros_categoria.html', {'livros': livros, 'categoria': 'Romance'})

def livros_distopia(request):
    livros = Livro.objects.filter(categoria='distopia')
    return render(request, 'livros_categoria.html', {'livros': livros, 'categoria': 'Distopia'})

def livros_fantasia(request):
    livros = Livro.objects.filter(categoria='fantasia')
    return render(request, 'livros_categoria.html', {'livros': livros, 'categoria': 'Fantasia'})

def livros_suspense(request):
    livros = Livro.objects.filter(categoria='suspense')
    return render(request, 'livros_categoria.html', {'livros': livros, 'categoria': 'Suspense'})