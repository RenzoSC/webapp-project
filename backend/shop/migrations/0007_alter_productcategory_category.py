# Generated by Django 5.0.1 on 2024-01-28 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_rename_parent_id_productcategory_parent_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productcategory',
            name='category',
            field=models.CharField(choices=[('herramientas', 'Herramientas'), ('maquillaje', 'Maquillaje'), ('skincare', 'Skincare'), ('esponjas', 'Esponjas'), ('brochas', 'Brochas'), ('limpiadores', 'Limpiadores'), ('rostro', 'Rostro'), ('ojos', 'Ojos'), ('labios', 'Labios'), ('hidratantes', 'Hidratantes'), ('limpiadores', 'Limpiadores'), ('prueba', 'Prueba')], max_length=20),
        ),
    ]
