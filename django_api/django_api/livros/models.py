from django.db import models

class Genero(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
class Livro(models.Model):
    nome = models.CharField(max_length=100)
    autor = models.CharField(max_length=100,  default="Autor desconhecido")
    resumo = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    genero = models.ForeignKey(Genero, related_name='livros', on_delete=models.CASCADE)
    imagem = models.ImageField(upload_to='livros/', blank=True, null=True)


    def __str__(self):
        return self.nome
    
