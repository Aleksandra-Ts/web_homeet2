from django.db import models


class User(models.Model):
    name = models.CharField(max_length=200)
    photo = models.TextField()
    gender = models.CharField(max_length=100)
    age = models.IntegerField()
    telegram = models.CharField(max_length=33)
    number = models.CharField(max_length=12)
    about = models.TextField()
    is_student = models.TextField()
    course = models.IntegerField()
    is_ended = models.TextField()
    step = models.TextField()
    faculty = models.TextField()
    program = models.TextField()
    job = models.TextField()
