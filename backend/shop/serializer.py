from rest_framework import serializers
from .models import Product

'''
Serializer para convertir los modelos en JSON de manera tal que el frontend pueda trabajar con la data q reciba'''
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('product_name', 'product_description', 'product_image', 'product_price', 'product_stock','product_dateAdded')