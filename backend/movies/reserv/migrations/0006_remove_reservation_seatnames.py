# Generated by Django 5.1 on 2024-10-08 20:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reserv', '0005_reservation_seatnames'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reservation',
            name='seatnames',
        ),
    ]