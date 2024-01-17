from django.db import models

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_description = models.CharField(max_length=400)
    product_image = models.ImageField(upload_to="productos/")
    product_price = models.DecimalField(max_digits = 20, decimal_places=2)
    product_stock = models.IntegerField()

    def _str_(self):
        return self.product_name
