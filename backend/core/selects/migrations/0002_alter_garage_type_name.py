# Generated by Django 3.2.9 on 2021-12-08 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('selects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='garage_type',
            name='name',
            field=models.CharField(max_length=30),
        ),
    ]