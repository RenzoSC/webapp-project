from django.db import models

# Create your models here.
class UserClients(models.Model):
    client_email = models.EmailField()
    client_username = models.CharField(max_length = 100)
    client_firstname = models.CharField(max_length = 100)
    client_lastname = models.CharField(max_length = 100)
    client_country = models.CharField(max_length = 100)
    client_province = models.CharField(max_length = 100)
    client_dir = models.CharField(max_length = 200)
    

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_description = models.CharField(max_length=400)
    product_image = models.ImageField(upload_to="productos/")
    product_price = models.DecimalField(max_digits = 20, decimal_places=2)
    product_stock = models.IntegerField()

