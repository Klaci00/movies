# Generated by Django 5.1 on 2024-09-20 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reserv', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reservation',
            name='venueId',
            field=models.IntegerField(default=0),
        ),
    ]