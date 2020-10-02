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

##### option-02 [add a method on a custom manager (usually preferred)]
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

### validating objects
```python
import datetime
from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext_lazy as _

class Article(models.Model):
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    pub_date = models.DateField()
    
    def clean(self):
        if self.status == 'draft' and self.pub_date is not None:                        # don't allow draft entries to have a pub_date.
            raise ValidationError(_('Draft entries may not have a publication date.'))
        
        if self.status == 'published' and self.pub_date is None:                        # set the pub_date for published items if it hasn't been set already.
            self.pub_date = datetime.date.today()
    
    def clean_fields(self, exclude=None):
        super().clean_fields(exclude = exclude)
        if self.status == 'draft' and self.pub_date is not None:
            if exclude and 'status' in exclude:
                raise ValidationError(
                    _('Draft entries may not have a publication date.')
                )
            else:
                raise ValidationError({
                    'status': _(
                        'Set status to draft if there is not a '
                        'publication date.'
                     ),
                })

NB: if you detect errors in multiple fields
raise ValidationError({
    'title': ValidationError(_('Missing title.'), code='required'),
    'pub_date': ValidationError(_('Invalid date.'), code='invalid'),
})
```



03) saving objects
04) deleting objects
-> Model.clean_fields()     [validate the model fields]
-> Model.clean()            [validate the model as a whole]
-> Model.validate_unique()  [validate the field uniqueness]
