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
    create_at   = models.DateField()
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

class Person(models.Model):
    ...
    ...
    
    def clean(self):
        if self.create_at is None:
            raise ValidationError(_('every person have a created date'))

    def clean_fields(self):
        if self.username is not None and self.create_at is None:
                raise ValidationError(
                    _('every person have a created date')
                )

NB: if you detect errors in multiple fields
raise ValidationError({
    'username': ValidationError(_('Missing username'), code='required'),
    'create_at': ValidationError(_('Invalid date'), code='invalid'),
})
```
