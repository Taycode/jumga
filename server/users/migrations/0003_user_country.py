# Generated by Django 3.1.4 on 2021-01-01 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20201231_1234'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='country',
            field=models.CharField(choices=[('nigeria', 'nigeria'), ('ghana', 'ghana'), ('kenya', 'kenya'), ('uk', 'uk')], default='nigeria', max_length=16),
        ),
    ]
