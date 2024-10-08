# Generated by Django 5.0.1 on 2024-03-02 22:31

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0014_remove_extradatauser_id_alter_extradatauser_user_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='extradatauser',
            name='user_dir',
        ),
        migrations.RemoveField(
            model_name='pedido',
            name='pedido_dirbill',
        ),
        migrations.RemoveField(
            model_name='pedido',
            name='pedido_direnvio',
        ),
        migrations.AddField(
            model_name='extradatauser',
            name='dir_calle',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='extradatauser',
            name='dir_ciudad',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='extradatauser',
            name='dir_codigopostal',
            field=models.IntegerField(default=5000),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='extradatauser',
            name='dir_provincia',
            field=models.CharField(default='Cordoba', max_length=100),
        ),
        migrations.AddField(
            model_name='pedido',
            name='pedido_dataextra',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='pedido_dataextra', to='shop.extradatauser'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Direccion',
        ),
    ]
