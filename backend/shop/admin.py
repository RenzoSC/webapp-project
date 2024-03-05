from django.contrib import admin
from .models import Product, Pedido, ProductCategory, ExtraDataUser, ProductosFav

'''
El codigo de aca es para registrar los modelos de manera tal que podamos interactuar con ellos 
(crear, eliminar y cambiar) a través del panel de administrador url/admin
'''
# Register your models here.
class ShopAdmin(admin.ModelAdmin):
    list_display = ['id','product_name', 'product_description', 'product_image', 'product_price', 'product_stock','product_dateAdded','product_category']

class PedidoAdmin(admin.ModelAdmin):
    list_display = ['id','pedido_date', 'pedido_user', 'pedido_state', 'pedido_total']

class CategoryAdmin(admin.ModelAdmin):
    list_display=['id','parent_id','category']

class ExtraDataAdmin(admin.ModelAdmin):
    list_display = ['user_id', 'user_mail', 'numero_telefono', 'dir_calle', 'dir_ciudad', 'dir_provincia', 'dir_codigopostal']

class FavProductsAdmin(admin.ModelAdmin):
    list_display = ['user_id', 'product_id']

admin.site.register(Product, ShopAdmin) 
admin.site.register(Pedido, PedidoAdmin)
admin.site.register(ProductCategory, CategoryAdmin)
admin.site.register(ExtraDataUser, ExtraDataAdmin)
admin.site.register(ProductosFav, FavProductsAdmin)