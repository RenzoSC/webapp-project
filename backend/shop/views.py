from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product
# Create your views here.

def home(request):
    return render(request, "index.html")

class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()