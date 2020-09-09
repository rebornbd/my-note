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

#### works of related-name:
```javascript
01) when you have a Book instance:
----------------------------------
    book = Book.objects.get(pk=1)
    
    book_name     = book.name
    category_name = book.category.name

02) when you have a Category instance:
--------------------------------------
    category = Category.objects.get(pk=1)
    
    category_name = category.name
    books = category.categories.all()
    
    for book in books:
      book_name = book.name
      print(book_name)
   
    # default #
    category = Category.objects.get(pk=1)
    print(category.name)
    for book in category.book_set.all():
      print(book.name)

NB: if you set related-name but default related-name still works.
    related-name 01: book_set
    related-name 02: categories
```

#### model have more than 1 foreign keys:
```python
class Book(models.Model):
  name          = models.CharField(max_length=100)
  category      = models.ForeignKey(Category, on_delete=models.CASCADE)
  sub_category  = models.ForeignKey(Category, on_delete=models.CASCADE)

# problem of more than 1 foreign keys without related_name
    category     default related-name: book_set
    sub_category default related-name: book_set

# NB: here two related-name are same & an error is occurred

# solution 01 #
---------------
class Book(models.Model):
  name          = models.CharField(max_length=100)
  category      = models.ForeignKey(Category, related_name='categories', on_delete=models.CASCADE)
  sub_category  = models.ForeignKey(Category, on_delete=models.CASCADE)
  
  # related_name
    category     related-name: categories
    sub_category related-name: book_set

# NB: here two related-name are unique. so that everything is fine.

# solution 02 #
---------------
class Book(models.Model):
  name          = models.CharField(max_length=100)
  category      = models.ForeignKey(Category, related_name='categories', on_delete=models.CASCADE)
  sub_category  = models.ForeignKey(Category, related_name='subcategories', on_delete=models.CASCADE)
  
  # related_name
    category     related-name: categories
    sub_category related-name: subcategories

# NB: this is a clear way to define a related-name
```

### related-name always be plural, because it's return multiple quries
```python
books = category.categories.all()

books = category.book_set.all()
```

