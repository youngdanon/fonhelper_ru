# Generated by Django 3.2.9 on 2021-12-09 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0004_alter_blocklog_event_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blocklog',
            name='time',
            field=models.DateTimeField(verbose_name='time'),
        ),
    ]
