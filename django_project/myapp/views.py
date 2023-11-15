from django.shortcuts import render, HttpResponse
from . import models  
import json
from .models import User


def index(request):
    global name_tek
    name_tek = ''
    if request.method == "POST":
        data = request.POST
        data = dict(data)
        print(data)
        person = User()
        person.name = request.POST.get("name")
        name_tek = person.name
        person.gender = request.POST.get("gender")
        person.age = request.POST.get("date")
        person.telegram = request.POST.get("tg")
        person.number = request.POST.get("tel")
        person.text_about = request.POST.get("textarea")
        person.save()
    return render(request, 'myapp/index.html', {})

def index2(request):
    global name_tek
    person = User.objects.get(name=name_tek)

    if request.method == "POST":
        data = request.POST
        data = dict(data)
        print(data)
        '''
        person.is_student = request.POST.get("name")
        person.course = request.POST.get("gender")
        person.is_ended = request.POST.get("date")
        person.step = request.POST.get("tg")
        person.faculty = request.POST.get("tel")
        person.program = request.POST.get("textarea")
        person.job = request.POST.get("")
        person.save()
        '''
    return render(request, 'myapp/index2.html', {'person': person})
