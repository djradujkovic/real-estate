# Generated by Django 4.0 on 2021-12-21 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_product_toilet_number_alter_product_bathrooms_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='bathrooms',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='bedrooms',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
