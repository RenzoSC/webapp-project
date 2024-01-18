from django.shortcuts import render,redirect

from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django.contrib.auth import login,logout, authenticate

from django.db import IntegrityError
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
                login(request, user)
                return redirect('products')
            except IntegrityError:
                return render(request, "signup.html",{
                        "form": UserCreationForm,
                        "error":"Usuario ya existe paaaa"
                    })
        return render(request, "signup.html",{
            "form": UserCreationForm,
            "error":"Las contraseñas no coinciden"
        })

def products(request):
    return render(request, "products.html")

def signout(request):
    logout(request)
    return redirect("home")

def signin(request):
    if request.method == 'GET':
        return render(request, "signin.html",{
            "form":AuthenticationForm
        })
    else:
        user = authenticate(request, username= request.POST['username'], password=request.POST['password'])
        
        if user is None:
            return render(request, "signin.html",{
                "form":AuthenticationForm,
                "error":"Usuario o contraseña incorrectos"
            })
        else:
            login(request, user)
            return redirect("products")
        
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()