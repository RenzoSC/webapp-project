from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class ExtraDataUser(models.Model):
    '''
    Tabla modelo que almacena datos extra del usuario
    - Creado para no tener que alterar el model User que nos da Django por default, va conectado por una fk user_id -
    '''
    user_id = models.ForeignKey(User, on_delete= models.CASCADE)
    numero_telefono = models.CharField(max_length=15, help_text='Ingrese su número de teléfono')

class Direccion(models.Model):
    '''
    Tabla modelo para almacenar direcciones
    - Pueden ser de Facturación o de envío -
    '''
    DIRTYPE = {'billing':'FACTURACIÓN', 'envio':'ENVÍO'}
    dir_user = models.ForeignKey(User, on_delete= models.CASCADE)
    dir_calle = models.CharField(max_length=100)
    dir_ciudad = models.CharField(max_length=100)
    dir_pais = models.CharField(max_length=100)
    dir_codigopostal = models.IntegerField()
    dir_type = models.CharField(max_length = 20, choices=DIRTYPE, default='FACTURACIÓN' )

class ProductCategory(models.Model):
    CATEGORY_CHOICES = [
        ('herramientas', 'Herramientas'),
        ('maquillaje', 'Maquillaje'),
        ('skincare', 'Skincare'),
        ('esponjas', 'Esponjas'),
        ('brochas', 'Brochas'),
        ('limpiadores', 'Limpiadores'),
        ('rostro', 'Rostro'),
        ('ojos', 'Ojos'),
        ('labios', 'Labios'),
        ('hidratantes', 'Hidratantes'),
        ('limpiadores', 'Limpiadores'),
        ('prueba','Prueba')
    ]
    category= models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.category} (ID: {self.id})'

class Product(models.Model):
    '''
    Tabla modelo del Producto, almacena datos del producto
    - La imagen se guarda en la parte de ../media/productos 
    Todas las imagenes se guardan en ../media (eso esta en settings.py)
    si se quiere cambiar la subcarpeta donde se guarda debemos cambiar el param "upload_to" -
    '''
    product_name = models.CharField(max_length=100)
    product_description = models.CharField(max_length=400)
    product_image = models.ImageField(upload_to="productos/")
    product_price = models.DecimalField(max_digits = 20, decimal_places=2)
    product_stock = models.IntegerField()
    product_dateAdded = models.DateTimeField(default=timezone.now)
    product_category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, related_name='product_category')
    product_subcategory = models.ForeignKey(ProductCategory, on_delete=models.CASCADE, related_name='product_subcategory')

    def __str__(self):
        return self.product_name
class Carrito(models.Model):
    '''
    Tabla modelo que representa el carrito de compras de un usuario
    '''
    carrito_creado = models.DateTimeField(default=timezone.now)
    carrito_user = models.ForeignKey(User, on_delete=models.CASCADE)

class CarritoArticles(models.Model):
    '''
    Tabla modelo que representa los articulos que se encuentran en el carrito de compras, es una tabla 
    intermediaria para asociar varios productos a un mismo carrito, para obtener todos los productos
    de un carrito tendriamos que filtrar los productos por id del carrito
    '''
    carrito_id = models.ForeignKey(Carrito, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete = models.CASCADE)
    cantidad = models.IntegerField() 

class Pedido(models.Model):
    '''
    Tabla modelo que representa el pedido (ticket de super por asi decirlo)
    '''
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
    '''
    Tabla modelo que representa los productos de un pedido, es una tabla intermediaria para relacionar
    un mismo pedido a varios productos, para obtener todos los productos de un pedido tendríamos que hacer
    una consulta y filtrar los productos por id del pedido
    '''
    pedido_id = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    precio_en_compra = models.DecimalField(max_digits = 20, decimal_places=2)

    def __str__(self):
        return f'Detalle Producto #{self.id} - Detalle Pedido #{self.detalle_pedido.id}'
    