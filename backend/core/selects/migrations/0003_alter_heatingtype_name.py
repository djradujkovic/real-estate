# Generated by Django 4.0 on 2021-12-16 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('selects', '0002_alter_garage_type_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='heatingtype',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]
