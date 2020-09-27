### model _meta api

```python
from blog.models import Post, Author

# retrieving a single field instance of a model
>>> p = Post._meta.get_field('title')
>>> p
<django.db.models.fields.CharField: title>
>>> p.null
False
>>> p.max_length
100
>>> p.get_internal_type()
'CharField'

# retrieving all field instances of a model
>>> all = Post._meta.get_fields()
>>> all = Post._meta.get_fields(include_hidden=True)  # Also include hidden fields
```

### post models
```python
class Post(models.Model):
    title       = models.CharField(max_length=100)
    content     = models.TextField()

    author      = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    puslished   = models.BooleanField(default=False)

    class Meta:
        # gives the proper plural name for admin
        verbose_name_plural = "Posts"

    def __str__(self):
        return self.title
```
