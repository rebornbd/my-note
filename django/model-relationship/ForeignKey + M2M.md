# ForeignKey & ManyToMany Relationship

### 01) ForeignKey:
```python
# models.py

from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title       = models.CharField(max_length=100)
    content     = models.TextField()
    author      = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Posts"
    
    def __str__(self):
        return self.title
```
```python
# command-line:
(ENV) $: python manage.py shell

# model import
>>> from blog.models import Post
>>> from django.contrib.auth.models import User

# ---------------------------------------------------
#                       USER
# ---------------------------------------------------
# get all user
>>> User.objects.all()

# first user all post
>>> User.objects.all()[0].post_set.all()  # default name
>>> User.objects.all()[0].posts.all()     # using related name


# ---------------------------------------------------
#                       POST
# ---------------------------------------------------
# get all post
>>> Post.objects.all()

# first post author
>>> Post.objects.all()[0].author
```

### 02) ManyToMany:
```python
# models.py

class Author(models.Model):
    name    = models.CharField(max_length=100)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    title       = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    authors     = models.ManyToManyField(Author)

    def __str__(self):
        return self.title
```
```python
# ---------------------------------------------------
#                       AUTHOR
# ---------------------------------------------------
# get all author
>>> Author.objects.all()

# first author all book
>>> Author.objects.all()[0].book_set.all()

# author: add new book
>>> book = Book.objects.all()[5]
>>> Author.objects.all()[0].book_set.add(book.id)    # [book.id == 6] <--> Author.objects.all()[0].book_set.add(6)

# author: remove book
>>> book = Book.objects.all()[5]
>>> Author.objects.all()[0].book_set.remove(book.id)


# ---------------------------------------------------
#                       BOOK
# ---------------------------------------------------
# get all book
>>> Book.objects.all()

# first book all author
>>> Book.objects.all()[0].authors.all()

# add new author
>>> new_author = Author.objects.all()[3]
>>> Book.objects.all()[0].authors.add(new_author.id)    # [new_author.id == 4] <--> Book.objects.all()[0].authors.add(4)

# remove author
>>> >>> new_author = Author.objects.all()[3]
>>> Book.objects.all()[0].authors.remove(new_author.id)
```

### ForeignKey vs ManyToMany:
```python
# ForeignKey (Post, User):
USER: User.objects.all()[0].users.all()     # return multiple querySet
POST: Post.objects.all()[0].author          # return single   querySet


# ManyToMany (Book, Author):
AUTHOR: Author.objects.all()[0].book_set.all()  # return multiple querySet
BOOK:   Book.objects.all()[0].authors.all()     # return multiple querySet
```

