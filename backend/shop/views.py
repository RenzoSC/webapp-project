from django.shortcuts import render,redirect

from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm  #formularios para creación y login de usuario
from django.contrib.auth.models import User
from django.contrib.auth import login,logout, authenticate     #funciones para cookies y autenticació de login

from django.db import IntegrityError
# Create your views here.

'''
Acá creamos las distintas "views" de la página, serían como las plantillas, desde acá podemos manejar los request
'''
def home(request):
    '''
    Acá solo renderizamos la plantilla de home de ./templates/
    '''
    return render(request, "home.html")

def signup(request):
    '''
    Acá manejamos la página de singnup con su form
    '''
    if request.method == "GET":                #si el request es un GET significa que está intentendo obtener la página (no se envió form)
        print('GET')
        return render(request, "signup.html",{
            "form": UserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:   #Si es POST entonces se está enviando datos al sv
            try:
                user = User.objects.create_user(username=request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('products')       #Se crea el user, se guarda en db, se logea y crea cookie y se redirecciona a products
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