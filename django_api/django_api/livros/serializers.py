from rest_framework import serializers
from .models import Genero, Livro

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = '__all__'

class Livroserializer(serializers.ModelSerializer):
    genero = GeneroSerializer(read_only = True)
    genero_id = serializers.PrimaryKeyRelatedField(queryset=Genero.objects,source='genero', write_only=True)

    class Meta:
        model = Livro
        fields = '__all__'