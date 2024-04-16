# Generated by Django 4.1 on 2024-03-29 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calc', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='amenity',
            name='special_occasion',
            field=models.CharField(blank=True, choices=[('Presidential', 'Presidential'), ('VIP3ME', 'VIP3ME'), ('VIP4', 'VIP4'), ('VIP2', 'VIP2'), ('None', 'None'), ('VIP5ME', 'VIP5ME'), ('VIP5', 'VIP5'), ('VIP3', 'VIP3'), ('VIP1', 'VIP1'), ('VIP4ME', 'VIP4ME'), ('VIP6', 'VIP6')], max_length=300, null=True),
        ),
        migrations.AlterField(
            model_name='spacial_amenities',
            name='amenity_code',
            field=models.CharField(blank=True, choices=[('Presidential', 'Presidential'), ('VIP3ME', 'VIP3ME'), ('VIP4', 'VIP4'), ('VIP2', 'VIP2'), ('None', 'None'), ('VIP5ME', 'VIP5ME'), ('VIP5', 'VIP5'), ('VIP3', 'VIP3'), ('VIP1', 'VIP1'), ('VIP4ME', 'VIP4ME'), ('VIP6', 'VIP6')], max_length=150),
        ),
        migrations.AlterField(
            model_name='spacial_amenities',
            name='amenity_type',
            field=models.CharField(blank=True, choices=[('Aniversary cake', 'Aniversary cake'), ('Canapes', 'Canapes'), ('Birthday cake', 'Birthday cake'), ('Celebration cake', 'Celebration cake'), ('6" cake', '6" cake'), ('Special amenities', 'Special amenities'), ('8" cake', '8" cake'), ('Sliced fruit platter', 'Sliced fruit platter'), ('Honeymoon cake', 'Honeymoon cake')], max_length=250),
        ),
        migrations.AlterField(
            model_name='spacial_amenities',
            name='day_of_week',
            field=models.CharField(blank=True, choices=[('Friday', 'Friday'), ('Tuesday', 'Tuesday'), ('Thursday', 'Thursday'), ('Sunday', 'Sunday'), ('Monday', 'Monday'), ('Saturday', 'Saturday'), ('Wednesday', 'Wednesday')], max_length=200),
        ),
    ]
