from django.urls import path
from . import views

urlpatterns = [
    path('register', views.UserRegister.as_view(), name='register'),
    path('login', views.UserLogin.as_view(), name='login'),
    path('logout', views.UserLogout.as_view(), name='logout'),
    path('user', views.UserView.as_view(), name='user'),
    path('productos/<str:categ>', views.ProductDetail.as_view()),
    path('productos/<str:categ>/<str:subcateg>', views.ProductDetail.as_view()),
    path('productos/<str:categ>/<str:subcateg>/', views.ProductDetail.as_view()),
    path('lista-productos', views.ProductsView.as_view()),
    path('lista-productos/<str:name>', views.ProductsView.as_view()),
    path('directions', views.DirectionView.as_view()),
    path('extra-data/<str:id>', views.ExtraDataView.as_view())
]