### django model relationship
```
1) OneToOne
2) ManyToOne | ForeignKey
3) ManyToMany
```

#### 01) OneToOne
```py
# User(1) ----- (1)Profile

##### model #####
class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100, null=True, blank=True)
    address  = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.username}"

class Profile(models.Model):
    profile_img = models.CharField(max_length=100, null=True, blank=True)
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"pro-{self.user.username}"

########## console ###########
# python manage.py shell
from myapp.models import User, Profile

# CREATE OBJECT
# ++++++++++++++
u1 = User(username="rahim")
u1.save()

p1 = Profile(profile_img="profiles/i-12hu6_uid98-10.png", user=u1)
p1.save()
# ++++++++++++++

users = User.objects.all()
user = users[0]
profile = user.profile

profiles = Profile.objects.all()
profile = profiles[0] | profiles.first()
user = profile.user
```

#### 02) ManyToOne | ForeignKey
```py
# User(1) ----- (M)Post

##### model #####
class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100, null=True, blank=True)
    address  = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.username}"

class Post(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    desc  = models.TextField(null=True, blank=True)
    user  = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.title}"

########## console ###########
# python manage.py shell
from myapp.models import User, Post

# CREATE OBJECT
# ++++++++++++++
u1 = User(username="korim")
u1.save()

p1 = Post(title="Django Model",    desc="....", user=u1)
p2 = Post(title="Django Queryset", desc="....", user=u1)
p1.save()
p2.save()
# ++++++++++++++

users = User.objects.all()
user = users[0]
# 1'ST USER ALL POST
posts = user.posts.all()

posts = Post.objects.all()
post = posts[0] | posts.first()
# 1'ST POST USER
user = post.user
```

#### 03) ManyToMany
```py
# Author(M) ----- (M)Book

##### model #####
class Author(models.Model):
    name = models.CharField(max_length=200)
    address  = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.name}"

class Book(models.Model):
    title   = models.CharField(max_length=200, null=True, blank=True)
    desc    = models.TextField(null=True, blank=True)
    authors = models.ManyToManyField(Author, related_name='books')
    
    def __str__(self):
        return f"{self.title}"

########## console ###########
# python manage.py shell
from myapp.models import Author, Book

# CREATE OBJECT
# +++++++++++++++++++++++++++++++++++++++++
a1 = Author(name="jio")
a2 = Author(name="ziko")
a1.save()
a2.save()

b1 = Book(title="Advanced C++", desc="Great Book!")
b1.save()                # SEE (NB)
b1.authors.add(a1)       # AFTER ADD
b1.authors.add(a2)       # AFTER ADD
b1.authors.remove(a2)
# NB: FIRST CREATE OBJECT WITHOUT M2M OBJECT, AFTER ADD M2M OBJECT'S

# ADD | REMOVE MULTIPLE AT SINGLE-TIME
b1.authors.add(a1, a2, a3, a4)
b1.authors.remove(a3, a4)
# DELETE FULL ENTRY
b1.authors.delete()
b1.authors.all()         # return <QuerySet []>

b2 = Book(title="Advanced Python", desc="Great Book!")
b2.save()
b2.authors.add(a1, a3)
# +++++++++++++++++++++++++++++++++++++++++

authors = Author.objects.all()
author = authors[0]
# 1'ST AUTHOR ALL BOOK
books = author.books.all()

books = Book.objects.all()
book = books[0]
# 1'ST BOOK ALL AUTHOR
authors = book.authors.all()
```
