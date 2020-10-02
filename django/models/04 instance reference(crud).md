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

-> Model.clean_fields()     [validate the model fields]
-> Model.clean()            [validate the model as a whole]
-> Model.validate_unique()  [validate the field uniqueness]
