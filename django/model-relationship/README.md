# django model relationship
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
#### default:
```python
class Book(models.Model):
  name = models.CharField(max_length=128)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  
# default name: book_set [django rules: ModelName + '_set']
# link: https://docs.djangoproject.com/en/3.1/ref/models/fields/#django.db.models.ForeignKey.related_name
```
