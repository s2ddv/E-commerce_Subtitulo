from django.db import models

class Genero(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
class Livro(models.Model):
    nome = models.CharField(max_length=100)
    resumo = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    genero = models.ForeignKey(Genero, related_name='livros', on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
    
class Usuario(models.Model):
    nome = models.CharField(max_length=20)
    sobrenome = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nome} {self.sobrenome}"
