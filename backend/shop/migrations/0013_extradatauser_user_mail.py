# Generated by Django 5.0.1 on 2024-03-02 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0012_remove_direccion_dir_user_extradatauser_user_dir'),
    ]

    operations = [
        migrations.AddField(
            model_name='extradatauser',
            name='user_mail',
            field=models.EmailField(default='renzoc009@gmail.com', max_length=254),
            preserve_default=False,
        ),
    ]
