# django querysets

# person model:
```python
class Person(models.Model):
    username  = models.CharField(max_length=100, null=True, blank=True)
    fname     = models.CharField(max_length=100, null=True, blank=True)
    lname     = models.CharField(max_length=100, null=True, blank=True)
    email     = models.CharField(max_length=100, null=True, blank=True)
    city      = models.CharField(max_length=100, null=True, blank=True)
    age       = models.IntegerField(default=0,   null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.username
```
### person model - demo data example:
```
id      username        fname       lname       email           city        age     created_at      updated_at
--------------------------------------------------------------------------------------------------------------
1       rahim           Rahim       Uddin       rahim@em.com    dhaka       25      2020-05-01      null
2       karim           Karim       Uddin       karim@em.com    dhaka       30      2020-05-01      null
3       ram             Ram         Jio         ram@em.com      dhaka       20      2020-05-05      null
4       sam             Sam         Hio         sam@em.com      dhaka       35      2020-05-07      2020-05-10
...     ...             ...         ...         ...             ...         ...     ...             ...
...     ...             ...         ...         ...             ...         ...     ...             ...
100     mou             Mou         Mim         mou@em.com      dhaka       21      2020-08-01      null
```

### [methods](#methods-that-return-new-querysets) that return new [querysets](#methods-that-return-new-querysets)
```python
Entry.objects.filter(**kwargs).exclude(**kwargs).order_by(**kwargs)

all
filter
exclude
order_by
reverse
values
distinct

# upper method examples:
------------------------
# 01: all()
persons = Person.objects.all()
for person in persons:
    person.username
    person.fname
    person.lname

# command-line:
>>> python manage.py shell
>>> from account.models import Person
>>> Person.objects.all()
<QuerySet [<Person: rahim>, <Person: karim>, <Person: ram>, <Person: sam>, ..., <Person: mou>]>


# 02: filter()
from django.db.models import Q

qs_data00 = Person.objects.filter(username='mou')
qs_data00 = Person.objects.filter(Q(age__gte=30))
## AND
qs_data01 = Person.objects.filter(username='mou', email='mou@em.com')
qs_data01 = Person.objects.filter(Q(username='mou') & Q(email='mou@em.com'))
## OR
qs_data02 = Person.objects.filter(Q(username='mou') | Q(email='mou@em.com'))

# command-line:
>>> Person.objects.filter(username='mou')
<QuerySet [<Person: mou>]>
>>> Person.objects.filter(Q(username='mou') & Q(email='mou@em.com'))
<QuerySet [<Person: mou>]>
>>> Person.objects.filter(Q(username='mou') | Q(email='rahim@em.com'))
<QuerySet [<Person: rahim>, <Person: mou>]>
>>> Person.objects.filter(Q(age__gte=30))
<QuerySet [<Person: karim>, <Person: sam>]>


# 03: exclude()
qs_data = Person.objects.exclude(username='mou', email='mou@em.com')

# command-line:
>>> Person.objects.exclude(username='mou', email='mou@em.com')
<QuerySet [<Person: rahim>, <Person: karim>, <Person: ram>, <Person: sam>]>
>>> Person.objects.exclude(Q(username='mou') | Q(email='rahim@em.com'))
<QuerySet [<Person: karim>, <Person: ram>, <Person: sam>]>


# 04: order_by()
qs_data = Person.objects.all().order_by('username')     # ascending  order
qs_data = Person.objects.all().order_by('-username')    # descending order

# command-line:
>>> Person.objects.all().order_by('username')
<QuerySet [<Person: karim>, <Person: mou>, <Person: rahim>, <Person: ram>, <Person: sam>]>
>>> Person.objects.all().order_by('-username')
<QuerySet [<Person: sam>, <Person: ram>, <Person: rahim>, <Person: mou>, <Person: karim>]>
>>> Person.objects.filter(Q(username='mou') | Q(email='rahim@em.com')).order_by('username')
<QuerySet [<Person: mou>, <Person: rahim>]>
>>> Person.objects.filter(Q(username='mou') | Q(email='rahim@em.com')).order_by('-username')
<QuerySet [<Person: rahim>, <Person: mou>]>


# 05: reverse()
qs_data = Person.objects.all().order_by('username')
data = qs_data.reverse()
data = Person.objects.all().order_by('username').reverse()

# command-line:
>>> Person.objects.all().order_by('username').reverse()
<QuerySet [<Person: sam>, <Person: ram>, <Person: rahim>, <Person: mou>, <Person: karim>]>
# return first two #
>>> Person.objects.all().order_by('username').reverse()[:2]
<QuerySet [<Person: sam>, <Person: ram>]>
# return first 100, if not then return present data #
>>> Person.objects.all().order_by('username').reverse()[:100]
<QuerySet [<Person: sam>, <Person: ram>, <Person: rahim>, <Person: mou>, <Person: karim>]>


# 05: values()
qs_data = Person.objects.values()
qs_data = Person.objects.values('username')

# command-line:
>>> Person.objects.values('username')
<QuerySet [{'username': 'rahim'}, {'username': 'karim'}, {'username': 'ram'}, {'username': 'sam'}, {'username': 'mou'}]>
>>> Person.objects.values('age', 'fname')
<QuerySet [{'age': 25, 'fname': 'Rahim'}, {'age': 30, 'fname': 'Karim'}, {'age': 20, 'fname': 'Ram'}, {'age': 35, 'fname': 'Sam'}, {'age': 21, 'fname': 'Mou'}]>
```

### [operators](#operators-that-return-new-querysets) that return new [querysets](#operators-that-return-new-querysets)
```python
01) AND (&)
02) OR  (|)

from django.db.models import Q

# 01: AND [&]
qs_data = Person.objects.filter(username='mou', email='mou@em.com')
qs_data = Person.objects.filter(Q(username='mou') & Q(email='mou@em.com'))

# command-line:
>>> Person.objects.filter(username='mou', email='mou@em.com')
<QuerySet [<Person: mou>]>
>>> Person.objects.filter(Q(username='mou') & Q(email='mou@em.com'))
<QuerySet [<Person: mou>]>


# 02: OR [|]
qs_data = Person.objects.filter(Q(username='mou') | Q(email='mou@em.com'))
qs_data = Person.objects.filter(Q(username='mou') | Q(email='rahim@em.com'))

# command-line:
>>> Person.objects.filter(Q(username='mou') | Q(email='mou@em.com'))
<QuerySet [<Person: mou>]>
>>> Person.objects.filter(Q(username='mou') | Q(email='rahim@em.com'))
<QuerySet [<Person: rahim>, <Person: mou>]>
```

### [methods](#methods-that-do-not-return-querysets) that do not return [querysets](#methods-that-do-not-return-querysets)
```python
get
create
update
delete
count
exists
first
last
latest
iterator
aggregate
get_or_create
update_or_create


# 01: get()
qs_data = Person.objects.get(id=1)
qs_data = Person.objects.get(pk=1)
# command-line:
>>> Person.objects.get(id=1)
<Person: rahim>
>>> Person.objects.get(pk=1)
<Person: rahim>


# 02: create()
person = Person.objects.create(username='rahim', fname='Rahim', lname='Uddin', email='rahim@em.com', city='dhaka', age=25)
# OR
person = Person.objects.create(username='rahim', fname='Rahim', lname='Uddin', email='rahim@em.com', city='dhaka', age=25)
person.save(force_insert=True)
# command-line:
>>> Person.objects.create(username='gazi', fname='Gazi', lname='Sekh', email='gazi@em.com', city='dhaka', age=26)
<Person: gazi>


# 03: update()
qs_data = Person.objects.filter(pk=6).update(username='Moumita')
# command-line:
>>> Person.objects.filter(pk=6).update(username='Moumita')
1


# 04: delete()
person  = Person.objects.get(pk=6)
persons = Person.objects.all()
person.delete()     # delete single data
persons.delete()    # delete all    data
# command-line:
>>> Person.objects.get(pk=6).delete()
(1, {'blog.Person': 1})

# 05: count()
qs_count = Person.objects.all().count()
qs_count = Person.objects.filter(Q(username='mou') | Q(email='rahim@em.com')).count()
# command-line:
>>> Person.objects.all().count()
6
>>> Person.objects.filter(Q(username='mou') | Q(email='rahim@em.com')).count()
2


# 06: exists()
qs_data = Person.objects.filter(pk=1).exists()
qs_data = Person.objects.filter(pk=110).exists()
# command-line:
>>> Person.objects.filter(pk=1).exists()
True
>>> Person.objects.filter(pk=110).exists()
False

# 07: first()
qs_data = Person.objects.filter(Q(age__gte=25)).first()
# command-line:
>>> Person.objects.filter(Q(age__gte=25)).first()
<Person: rahim>


# 08: last()
qs_data = Person.objects.filter(Q(age__gte=25)).last()
# command-line:
>>> Person.objects.filter(Q(age__gte=25)).last()
<Person: gazi>


# 09: latest()
qs_data = Person.objects.latest('created_at')
qs_data = Person.objects.all().latest('created_at')
qs_data = Person.objects.filter(age__gte=30).latest('created_at')
# command-line:
>>> Person.objects.latest('created_at')
<Person: gazi>
>>> Person.objects.all().latest('created_at')
<Person: gazi>
>>> Person.objects.filter(age__gte=30).latest('created_at')
<Person: sam>


# 10: iterator()
persons = Person.objects.all()
for person in persons.iterator():
    person.username
    person.email
# command-line:
>>> persons = Person.objects.all()
>>> for person in persons.iterator():
...     person.username
...     person.email
rahim rahim@em.com, karim karim@em.com, ram ram@em.com, sam sam@em.com, mou mou@em.com, gazi gazi@em.com
# output formate is changed
# the queryset cache is a problem if your queryset is huge
# Link: https://blog.etianen.com/blog/2013/06/08/django-querysets/


# 11: aggregate()
...
# in databases they are represented by operators as: sum & avg, in django they are represented as: aggregate & annotate
# Link: https://www.agiliq.com/blog/2009/08/django-aggregation-tutorial/


# 12: get_or_create()
person, created = Person.objects.get_or_create(username='gazi')
# command-line:
>>> Person.objects.get_or_create(username='gazi')
(<Person: gazi>, False)
>>> person, created = Person.objects.get_or_create(username='gazi')
>>> person
<Person: gazi>
>>> created
False


# 13: update_or_create()
person, created = Person.objects.update_or_create(username='ripon', defaults={'username': 'ripon', 'email': 'ripon@em.com'})
# command-line:
>>> Person.objects.update_or_create(username='ripon', defaults={'username': 'ripon', 'email': 'ripon@em.com'})
(<Person: ripon>, False)
>>> Person.objects.update_or_create(username='rupon', defaults={'username': 'rupon', 'email': 'rupon@em.com'})
(<Person: rupon>, True)
>>> person, created = Person.objects.update_or_create(username='ripon', defaults={'username': 'ripon', 'email': 'ripon@em.com'})
>>> person
<Person: ripon>
>>> created
False
```

### [field lookups](#field-lookups)
```python
Entry.objects.get(id__exact=12)
```
```python

```






