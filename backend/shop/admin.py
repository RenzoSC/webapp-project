from django.contrib import admin
from .models import Product

# Register your models here.
class ShopAdmin(admin.ModelAdmin):
    list_display = ['product_name', 'product_description', 'product_image', 'product_price', 'product_stock']

admin.site.register(Product, ShopAdmin)