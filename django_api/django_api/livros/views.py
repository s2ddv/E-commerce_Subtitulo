from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from .models import Livro
from django.http import JsonResponse

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
    return render(request, 'produtos.html', {'livro': livro})

def livros_por_genero(request, genero): 
    livros = Livro.objects.filter(genero__nome__iexact=genero)
    data = [{
        'id': livro.id,
        'nome': livro.nome,
        'autor': livro.autor,
        'preco': livro.preco,
        'imagem': livro.imagem.url if livro.imagem else '',
    } 
    for livro in livros
    ]
    return JsonResponse(data, safe=False)