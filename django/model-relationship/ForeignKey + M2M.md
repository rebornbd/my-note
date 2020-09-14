# ForeignKey & ManyToMany Relationship

### 01) ForeignKey:
```python
# models.py

from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title       = models.CharField(max_length=100)
    content     = models.TextField()
    author      = models.ForeignKey(User, related_name='users', on_delete=models.CASCADE)

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
>>> User.objects.all()[0].users.all()     # using related name


# ---------------------------------------------------
#                       POST
# ---------------------------------------------------
# get all post
>>> Post.objects.all()

# first post author
>>> Post.objects.all()[0].author
```

