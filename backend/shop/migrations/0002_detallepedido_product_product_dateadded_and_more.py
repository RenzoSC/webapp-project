# Generated by Django 5.0.1 on 2024-01-18 21:02

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='DetallePedido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='product_dateAdded',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.CreateModel(
            name='DetalleProducto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.IntegerField()),
                ('detalle_pedido', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.detallepedido')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.product')),
            ],
        ),
        migrations.AddField(
            model_name='detallepedido',
            name='products',
            field=models.ManyToManyField(through='shop.DetalleProducto', to='shop.product'),
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pedido_date', models.DateTimeField(auto_now_add=True)),
                ('pedido_state', models.CharField(choices=[('pend', 'PENDIENTE'), ('sent', 'ENVIADO'), ('cancel', 'CANCELADO')], default='PENDIENTE', max_length=10)),
                ('pedido_direnvio', models.CharField(max_length=200)),
                ('pedido_total', models.IntegerField()),
                ('pedido_user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='detallepedido',
            name='pedido',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shop.pedido'),
        ),
    ]
