from rest_framework import serializers
from .models import Product, ExtraDataUser

from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.models import User
UserModel = User

'''
Serializer para convertir los modelos en JSON de manera tal que el frontend pueda trabajar con la data q reciba'''
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('product_name', 'product_description', 'product_image', 'product_price', 'product_stock','product_dateAdded','product_category','product_subcategory')   

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(password=clean_data['password'], email=clean_data['email'], username=clean_data['username'])
        user_obj.save()
        return user_obj

class UserLoginSerializer(serializers.Serializer):
    password = serializers.CharField()
    username = serializers.CharField()
    def check_user(self, clean_data):
        user = authenticate(username=clean_data['username'], password=clean_data['password'])
        if not user:
            raise ValueError('User not found')
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['id','email', 'username']

class ExtraDataSerializer(serializers.ModelSerializer):
    class Meta:
        model= ExtraDataUser
        fields=['user_id','user_mail','numero_telefono','dir_calle','dir_ciudad','dir_provincia','dir_codigopostal']
    
    def update(self, instance, validated_data):
        print(instance)
        print(validated_data)
        instance.numero_telefono = validated_data.get('numero_telefono', instance.numero_telefono)
        instance.user_mail = validated_data.get('user_mail', instance.user_mail)
        instance.dir_calle = validated_data.get('dir_calle', instance.dir_calle)
        instance.dir_ciudad = validated_data.get('dir_ciudad', instance.dir_ciudad)
        instance.dir_provincia = validated_data.get('dir_provincia', instance.dir_provincia)
        instance.dir_codigopostal = validated_data.get('dir_codigopostal', instance.dir_codigopostal)
        instance.save()
        return instance