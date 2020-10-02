### model instance reference
```python
01) creating objects
02) validating objects
03) saving objects
04) deleting objects
```

### models
```python
from django.db import models

class Blog(models.Model):
    name = models.CharField(max_length=100)
    tagline = models.TextField()

    def __str__(self):
        return self.name

class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()

    def __str__(self):
        return self.name

class Entry(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    authors = models.ManyToManyField(Author)
    
    headline = models.CharField(max_length=255)
    body_text = models.TextField()
    pub_date = models.DateField()

    def __str__(self):
        return self.headline
```

### creating objects

##### option-01 [add a classmethod on the model class]
```python
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)

    @classmethod
    def create(cls, title):
        book = cls(title=title)
        # do something with the book
        return book

# quary
book = Book.create("Pride and Prejudice")
```

##### option-02 [Add a method on a custom manager (usually preferred)]
```python
class BookManager(models.Manager):
    def create_book(self, title):
        book = self.create(title=title)
        # do something with the book
        return book

class Book(models.Model):
    title = models.CharField(max_length=100)

    objects = BookManager()

# query
book = Book.objects.create_book("Pride and Prejudice")
```




02) validating objects
03) saving objects
04) deleting objects
-> Model.clean_fields()     [validate the model fields]
-> Model.clean()            [validate the model as a whole]
-> Model.validate_unique()  [validate the field uniqueness]
