### model instance reference
```python
01) creating objects
02) saving objects
03) deleting objects
04) validating objects
```

### models
```python
from django.db import models

class Person(models.Model):
    CHOICE_GENDER = [('M', 'Male'), ('F', 'Female'), ('O', 'Other')]

    username    = models.CharField(null=True, blank=True, max_length=200)
    email       = models.EmailField(null=True, blank=True)
    gender      = models.CharField(null=True, blank=True, max_length=1, choices=CHOICE_GENDER)
    address     = models.TextField(null=True, blank=True)
```

### 01) creating objects
```python
# option-01 [add a classmethod on the model class]
class Person(models.Model):
    ...
    ...

    @classmethod
    def create(cls, username=None, email=None, gender=None, address=None):
        person = cls(username=username, email=email, gender=gender, address=address)
        return person
# query
>>> p = Person(username='user', email='user@example.com', gender='M')

# option-02 [add a method on a custom manager (usually preferred)]
class PersonManager(models.Manager):
    def create_person(self, username=None, email=None, gender=None, address=None):
        person = self.create(username=username, email=email, gender=gender, address=address)
        return person

class Person(models.Model):
    ...
    ...
    
    objects = PersonManager()

# query
>>> p = Person.objects.create_person(username='user', email='user@example.com', gender='M')
```

### 02) saving objects
```python
# insert
>>> p = Person(username='user', email='user@example.com', gender='M')
>>> p.id        # return None
>>> p.save()
>>> p.id        # return id value

# update - 01
>>> p = Person(id=1, username='user', email='user@example.com', gender='M')
>>> p.id        # return id value
>>> p.save()

# update - 02
>>> p = Person(username='user', email='user@example.com', gender='M')
>>> p.id        # return None
>>> p.id = 1
>>> p.save()

# specifying fields to update
>>> p = Person(id=1, username='another_user', email='user@yahoo.com', gender='M')
>>> p.save(update_fields = ['username', 'email'])   # only updates 'username' & 'email'
```

### 03) deleting objects
```python
>>> p = Person.objects.get(pk=1)
>>> p.delete()
```

### 04) validating objects
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
