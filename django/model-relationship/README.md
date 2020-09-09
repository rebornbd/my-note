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
  category = models.ForeignKey('Category')
```
### NB: many books make 1 category [ B (M) <------> (1) C ]


