# Generated by Django 4.2.4 on 2023-11-06 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('photo', models.TextField()),
                ('gender', models.CharField(max_length=100)),
                ('age', models.IntegerField()),
                ('telegram', models.CharField(max_length=33)),
                ('number', models.CharField(max_length=12)),
                ('about', models.TextField()),
                ('is_student', models.BooleanField(default=True)),
                ('course', models.IntegerField()),
                ('is_ended', models.BooleanField(default=False)),
                ('step', models.TextField()),
                ('faculty', models.TextField()),
                ('program', models.TextField()),
                ('job', models.TextField()),
            ],
        ),
    ]
