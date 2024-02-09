from django.shortcuts import render,redirect

from rest_framework import viewsets
from .serializer import ProductSerializer, UserLoginSerializer, UserRegisterSerializer, UserSerializer
from .models import Product, ProductCategory

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm  #formularios para creación y login de usuario
from django.contrib.auth.models import User
from django.contrib.auth import login,logout, authenticate, get_user_model     #funciones para cookies y autenticació de login

from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from .validation import custom_validation, validate_email, validate_password, validate_username

from django.db import IntegrityError
from django.db.models import Q 
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

class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data=clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        data = request.data
        assert validate_username(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)

class UserLogout(APIView):
    authentication_classes = (TokenAuthentication,)
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user':serializer.data}, status=status.HTTP_200_OK)

class ProductDetail(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self,request, categ,subcateg=''):
        try:
            category_obj = ProductCategory.objects.get(category= categ)
            product_category = category_obj.id
        except:
            return Response("No existen productos con esta categoria xd",status=status.HTTP_404_NOT_FOUND)
        if(subcateg != ''):
            try:
                subcategory_obj = ProductCategory.objects.get(category = subcateg)
                subcategory = subcategory_obj.id
                products = Product.objects.filter(Q(product_category=product_category) & Q(product_subcategory=subcategory))
                serializer = ProductSerializer(products, many=True)
                return Response(serializer.data)
            except:
                return Response("No existen productos con esta subcategoria xd",status=status.HTTP_404_NOT_FOUND)
        products = Product.objects.filter(product_category = product_category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)