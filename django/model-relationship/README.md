# django model relationship types
```
1) ManyToMany
2) ManyToOne (ForeignKey)
3) OneToOne
```

### relationship (Book & Category):
```python
class Category(models.Model):
  name = models.CharField(max_length=128)

class Book(models.Model):
  name = models.CharField(max_length=128)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
 
# NB: many books make 1 category [ B (M) <------> (1) C ]
```

### models related_name:

```python
# default related_name

class Book(models.Model):
  name = models.CharField(max_length=128)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  
# django default related-name: book_set
# django  rules  related-name: (ModelName + '_set') for related-name

# if set related_name

class Book(models.Model):
  name = models.CharField(max_length=128)
  category = models.ForeignKey(Category, related_name='categories' on_delete=models.CASCADE)

# name: categories

# link: https://docs.djangoproject.com/en/3.1/ref/models/fields/#django.db.models.ForeignKey.related_name
```

#### related_name:
