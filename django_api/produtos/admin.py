from django.contrib import admin
from .models import Usuario, Livro, Genero

admin.site.register(Usuario)
admin.site.register(Livro)
admin.site.register(Genero)