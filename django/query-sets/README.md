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

### ![method] that return new querysets
```python
Entry.objects.filter(**kwargs).exclude(**kwargs).order_by(**kwargs)

all
filter
exclude
order_by
distinct
reverse
values


```
