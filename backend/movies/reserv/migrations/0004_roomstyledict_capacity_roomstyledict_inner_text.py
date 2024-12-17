# Generated by Django 5.1 on 2024-12-17 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reserv', '0003_alter_roomstyledict_style_dict'),
    ]

    operations = [
        migrations.AddField(
            model_name='roomstyledict',
            name='capacity',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='roomstyledict',
            name='inner_text',
            field=models.JSONField(default=dict),
        ),
    ]
