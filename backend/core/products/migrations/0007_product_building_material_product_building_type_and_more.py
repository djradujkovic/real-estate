# Generated by Django 4.0 on 2021-12-16 21:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('selects', '0003_alter_heatingtype_name'),
        ('products', '0006_remove_product_building_material_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='building_material',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.building_material'),
        ),
        migrations.AddField(
            model_name='product',
            name='building_type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.building_type'),
        ),
        migrations.AddField(
            model_name='product',
            name='building_usage',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.building_usage'),
        ),
        migrations.AddField(
            model_name='product',
            name='estate_type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.estatetype'),
        ),
        migrations.AddField(
            model_name='product',
            name='floor_type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.floor_type'),
        ),
        migrations.AddField(
            model_name='product',
            name='floors',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.floors'),
        ),
        migrations.AddField(
            model_name='product',
            name='garage_type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.garage_type'),
        ),
        migrations.AddField(
            model_name='product',
            name='heating_type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.heatingtype'),
        ),
        migrations.AddField(
            model_name='product',
            name='kitchen',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.kitchen'),
        ),
        migrations.AddField(
            model_name='product',
            name='new_or_used',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.new_or_used'),
        ),
        migrations.AddField(
            model_name='product',
            name='object_type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.object_type'),
        ),
        migrations.AddField(
            model_name='product',
            name='road',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.road'),
        ),
        migrations.AddField(
            model_name='product',
            name='rooms',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.rooms'),
        ),
        migrations.AddField(
            model_name='product',
            name='status',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.status'),
        ),
        migrations.AddField(
            model_name='product',
            name='toilets',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.toilet'),
        ),
        migrations.AddField(
            model_name='product',
            name='type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.type'),
        ),
        migrations.AddField(
            model_name='product',
            name='vehicle_capacity',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.vehicle_capacity'),
        ),
        migrations.AddField(
            model_name='product',
            name='year_of_build',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='selects.year_of_build'),
        ),
    ]
