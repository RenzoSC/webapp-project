from django.contrib import admin
from .models import Product, Pedido

# Register your models here.
class ShopAdmin(admin.ModelAdmin):
    list_display = ['product_name', 'product_description', 'product_image', 'product_price', 'product_stock','product_dateAdded']

class PedidoAdmin(admin.ModelAdmin):
    list_display = ['pedido_date', 'pedido_user', 'pedido_state', 'pedido_direnvio', 'pedido_total']

admin.site.register(Product, ShopAdmin)
admin.site.register(Pedido, PedidoAdmin)