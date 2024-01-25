from django.contrib import admin
from .models import Product, Pedido, ProductCategory

'''
El codigo de aca es para registrar los modelos de manera tal que podamos interactuar con ellos 
(crear, eliminar y cambiar) a través del panel de administrador url/admin
'''
# Register your models here.
class ShopAdmin(admin.ModelAdmin):
    list_display = ['id','product_name', 'product_description', 'product_image', 'product_price', 'product_stock','product_dateAdded','product_category']

class PedidoAdmin(admin.ModelAdmin):
    list_display = ['id','pedido_date', 'pedido_user', 'pedido_state', 'pedido_direnvio', 'pedido_total']

class CategoryAdmin(admin.ModelAdmin):
    list_display=['id','parent_id','category']

admin.site.register(Product, ShopAdmin) 
admin.site.register(Pedido, PedidoAdmin)
admin.site.register(ProductCategory, CategoryAdmin)