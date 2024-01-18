from django.shortcuts import render,redirect
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product

from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
# Create your views here.

def home(request):
    return render(request, "home.html")

def signup(request):
    if request.method == "GET":
        print('GET')
        return render(request, "signup.html",{
            "form": UserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(username=request.POST['username'], password=request.POST['password1'])
                user.save()
                return HttpResponse('Usuario creado')
            except:
                return render(request, "signup.html",{
                        "form": UserCreationForm,
                        "error":"Usuario ya existe paaaa"
                    })
        
        print(request.POST)
        return render(request, "signup.html",{
            "form": UserCreationForm,
            "error":"Las contraseñas no coinciden"
        })
    return render(request, "signup.html",{
        "form": UserCreationForm
    })
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()