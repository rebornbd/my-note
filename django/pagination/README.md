# Django Pagination With Bootstrap 4

### 01) models.py:
```python
from django.db import models

class Person(models.Model):
    fname  = models.CharField(max_length=50, null=True, blank=True)
    lname  = models.CharField(max_length=50, null=True, blank=True)
    sex    = models.CharField(max_length=10, null=True, blank=True)
    dob    = models.DateField(null=True, blank=True)
    age    = models.IntegerField(blank=True, null=True)
    
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.fname} {self.lname}"
```

### 02) urls.py:
```python
from django.urls import path

from .views import (my_paginator)

app_name = 'application'

urlpatterns = [
    path('paginator', my_paginator, name="paginator")
]
```

### 03) views.py:

```python
from django.shortcuts import render, HttpResponse

from .models import Person
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

def my_paginator(request):
    # user_list = Person.objects.all()
    # paginator = Paginator(user_list, 5)

    # cnt = paginator.count
    # pnum = paginator.num_pages
    # prange = paginator.page_range
    # mystr = f"totalUser: {cnt}, pageNum: {pnum}, pageRange: {prange}"
    
    
    # users = paginator.page(2)
    
    # hnext   = users.has_next()
    # hpre    = users.has_previous()
    # hother  = users.has_other_pages()
    # hnpn    = users.next_page_number()
    # hppn    = users.previous_page_number()
    # hsi     = users.start_index()
    # hei     = users.end_index()

    user_list = Person.objects.all()
    page = request.GET.get('page', 1)
    
    number_of_person_per_page = 5

    paginator = Paginator(user_list, number_of_person_per_page)
    try:
        users = paginator.page(page)
    except PageNotAnInteger:
        users = paginator.page(1)
    except EmptyPage:
        users = paginator.page(paginator.num_pages)
    
    context = {
        'users': users
    }
    return render(request, 'sub_dir/paginator.html', context)
```

### 04) templates (paginator.html):
```html
{% extends 'base.html' %}

{% load static %}

{% block content %}
    <div class="container">
        <h3>Paginator</h3>
        <table class="table">
            <thead class="thead-dark">
              <tr>
                <th>#</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Create Date</th>
                <th scope="col">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {% for user in users %}
                <tr>
                  <td>{{ forloop.counter }}</td>
                  <td>{{ user.fname }}</td>
                  <td>{{ user.lname }}</td>
                  <td>{{ user.created_at }}</td>
                  <td>
                    <a class="btn btn-success" href="#">DETAILS</a>
                    <a class="btn btn-warning" href="#">EDIT</a>
                  </td>
                </tr>
              {% endfor %}
            </tbody>
          </table>
          
          {% if users.has_other_pages %}
            <ul class="pagination">
              {% if users.has_previous %}
                <li class="page-item"><a class="page-link" href="?page={{ users.previous_page_number }}">Previous</a></li>
              {% else %}
                <!-- <li class="page-item disabled"><a class="page-link"></a></li> -->
              {% endif %}
              {% for i in users.paginator.page_range %}
                {% if users.number == i %}
                  <li class="page-item active"><a class="page-link">{{ i }}</a></li>
                {% else %}
                  <li class="page-item"><a class="page-link" href="?page={{ i }}">{{ i }}</a></li>
                {% endif %}
              {% endfor %}
              {% if users.has_next %}
                <li class="page-item"><a class="page-link" href="?page={{ users.next_page_number }}">Next</a></li>
              {% else %}
                <!-- <li class="page-item disabled"><a class="page-link"></a></li> -->
              {% endif %}
            </ul>
          {% endif %}
    </div>
{% endblock content %}
```
