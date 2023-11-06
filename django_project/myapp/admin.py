from django.contrib import admin
from . import models


class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'gender', 'age', 'telegram', 'number', 'about', 'is_student', 'course', 'is_ended', 'step', 'faculty', 'program', 'job')