from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product

from django.contrib.auth.forms import UserCreationForm
# Create your views here.

def home(request):
    return render(request, "index.html")

def signup(request):
    return render(request, "signup.html",{
        "form":
    })
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()