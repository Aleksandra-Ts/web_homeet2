from django.shortcuts import render, HttpResponse
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
    '''
    global name_tek
    person = User.objects.get(name=name_tek)
    '''
    if request.method == "POST":
        data = request.POST
        data = dict(data)
        print(data)
        person = User()
        person.is_student = request.POST.get("st")
        person.course = request.POST.get("range")
        person.is_ended = request.POST.get("end")
        person.job = request.POST.get("work")
        person.save()
    return render(request, 'myapp/index2.html', {}) #{'person': person}
