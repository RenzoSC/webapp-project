from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class ExtraDataUser(models.Model):
    user_id = models.ForeignKey(User, on_delete= models.CASCADE)
    numero_telefono = models.CharField(max_length=15, help_text='Ingrese su número de teléfono')

class Direccion(models.Model):
    DIRTYPE = {'billing':'FACTURACIÓN', 'envio':'ENVÍO'}
    dir_user = models.ForeignKey(User, on_delete= models.CASCADE)
    dir_calle = models.CharField(max_length=100)
    dir_ciudad = models.CharField(max_length=100)
    dir_pais = models.CharField(max_length=100)
    dir_codigopostal = models.IntegerField()
    dir_type = models.CharField(max_length = 20, choices=DIRTYPE, default='FACTURACIÓN' )
class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_description = models.CharField(max_length=400)
    product_image = models.ImageField(upload_to="productos/")
    product_price = models.DecimalField(max_digits = 20, decimal_places=2)
    product_stock = models.IntegerField()
    product_dateAdded = models.DateTimeField(default=timezone.now)

    def _str_(self):
        return self.product_name
class Carrito(models.Model):
    carrito_creado = models.DateTimeField(default=timezone.now)
    carrito_user = models.ForeignKey(User, on_delete=models.CASCADE)

class CarritoArticles(models.Model):
    carrito_id = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete = models.CASCADE)
    cantidad = models.IntegerField() 

class Pedido(models.Model):
    STATES = {'pend':'PENDIENTE', 'sent':'ENVIADO', 'cancel':'CANCELADO' }
    METHOD = {'deb':'DEBITO', 'cred':'CREDITO', 'trans':'TRANSFERENCIA'}
    pedido_date = models.DateTimeField(auto_now_add = True)
    pedido_user = models.ForeignKey(User, on_delete = models.CASCADE)
    pedido_state = models.CharField(max_length = 10, choices=STATES, default='PENDIENTE' )
    pedido_total = models.IntegerField()
    pedido_paymethod = models.CharField(max_length = 20, choices=METHOD, default='DEBITO' )
    pedido_dirbill = models.ForeignKey(Direccion, on_delete=models.CASCADE,related_name='pedidos_dirbill')
    pedido_direnvio = models.ForeignKey(Direccion, on_delete=models.CASCADE, related_name='pedidos_direnvio')

    def __str__(self):
        return f'Pedido #{self.id} - {self.pedido_user.username}'
    
class ProductosPedido(models.Model):
    pedido_id = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    precio_en_compra = models.DecimalField(max_digits = 20, decimal_places=2)

    def __str__(self):
        return f'Detalle Producto #{self.id} - Detalle Pedido #{self.detalle_pedido.id}'
    