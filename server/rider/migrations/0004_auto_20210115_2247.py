# Generated by Django 3.1.4 on 2021-01-15 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rider', '0003_auto_20210113_0834'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='delivered_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
