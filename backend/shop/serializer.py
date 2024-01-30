from rest_framework import serializers
from .models import Product

from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.models import User
UserModel = User

'''
Serializer para convertir los modelos en JSON de manera tal que el frontend pueda trabajar con la data q reciba'''
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('product_name', 'product_description', 'product_image', 'product_price', 'product_stock','product_dateAdded')

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(password=clean_data['password'], email=clean_data['email'], username=clean_data['username'])
        user_obj.save()
        return user_obj

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
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
        fields = ['email', 'username']