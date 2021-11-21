### serializer & deserializer

#### overview
```
    Serializer  ---->-------- network --------->    Deserializer
        |                                                |
        |                                                |
        ↓                                                ↓
     Object                                           Object


# defination:
SERIALIZER: Serializer is the process of translating a data structure or object state into a format that can be stored 
(in a file or memory data buffer) or transmitted (over a computer network).

DESERIALIZER: Deserializer is the reverse process, taking the raw data (from a file or from an incoming network socket)
and reconstructing the object model.
```

#### models.py | book.models
```py
from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    authors = models.ManyToManyField(User, related_name='books', blank=True)
    title = models.CharField(max_length=200)
    price = models.PositiveIntegerField()
    published = models.CharField(max_length=100, null=True, blank=True)
```

#### serializers.py | book.serializers
```py
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from api.serializers import UserSerializer
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    authors = UserSerializer(many=True, read_only=True)
    class Meta:
        model = Book
        fields = '__all__'

    def create(self, validated_data):
        title = validated_data.get('title')
        price = validated_data.get('price')
        published = validated_data.get('published')
        book = Book(title=title, price=price, published=published)
        book.save()
        
        authors = self.initial_data.get("authors", [])
        if isinstance(authors, list):
            for authID in authors:
                try:
                    user = User.objects.get(pk=authID)
                    book.authors.add(user)
                except Exception as err:
                    pass
        return book
    
    def update(self, instance, validated_data):
        instance.title      = validated_data.get('title', instance.title)
        instance.price      = validated_data.get('price', instance.price)
        instance.published  = validated_data.get('published', instance.published)
        instance.save()
        
        authors = self.initial_data.get("authors", [])
        if isinstance(authors, list):
            if len(authors) > 0:
                # delete previous auth
                instance.authors.clear()
                
                # preAuths = instance.authors.all()
                # for auth in preAuths:
                #     instance.authors.remove(auth)
                
                # set new auth
                for authID in authors:
                    try:
                        user = User.objects.get(pk=authID)
                        instance.authors.add(user)
                    except Exception as err:
                        pass
        return instance
```

#### views.py | book.views
```py
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.http import JsonResponse
import json
from ..serializers import BookSerializer
from ..models import Book


def fbvBookLC(request):
    data = {}
    data['success'] = False
        
    # list
    if request.method == "GET":
        books = Book.objects.all()
        serializer = BookSerializer(instance=books, many=True)
        return JsonResponse(serializer.data, safe=False)

    
    # create
    elif request.method == "POST":
        book = json.loads(request.body)
        serializer = BookSerializer(data=book)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        return JsonResponse(serializer.errors, safe=False)
    
    return JsonResponse({"success": False})


def fbvBookRUD(request, id):
    data = {}
    data['success'] = False
    
    # retrive
    if request.method == "GET":
        queryset = Book.objects.all()
        try:
            book = get_object_or_404(queryset, pk=id)
            serializer = BookSerializer(instance=book)
            return JsonResponse(serializer.data, safe=False)
        except Exception as err:
            data['errors'] = str(err)
        return JsonResponse(data, safe=False)

        
    # update
    if request.method == "PUT":
        book_data = json.loads(request.body)
        queryset = Book.objects.all()
        try:
            book = get_object_or_404(queryset, pk=id)
            serializer = BookSerializer(instance=book, data=book_data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, safe=False)
            return JsonResponse(serializer.errors, safe=False)
        except Exception as err:
            data['errors'] = str(err)
        return JsonResponse(data, safe=False)
    
    
    # delete
    elif request.method == "DELETE":
        queryset = Book.objects.all()
        try:
            book = get_object_or_404(queryset, pk=id)
            book.delete()
            
            data['success'] = True
            return JsonResponse(data, safe=False)
        except Exception as err:
            data['errors'] = str(err)

    return JsonResponse(data, safe=False)
```

#### request from postman
```js
// create: method | POST
// exam: 01
url: http://127.0.0.1:8000/api/book/
{
    "title": "new Bangla Book",
    "price": 150
}
// exam: 02
url: http://127.0.0.1:8000/api/book/
{
    "title": "Bangla Book",
    "price": 150
    "authors": [1, 3, 5]
}

// update: method | PUT
// exam: 01
url: http://127.0.0.1:8000/api/book/1
{
    "title": "new Bangla Book",
    "authors": [5, 3]
}
// exam: 01
url: http://127.0.0.1:8000/api/book/1
{
    "title": "new Bangla Book",
    "price": 210
}
```
