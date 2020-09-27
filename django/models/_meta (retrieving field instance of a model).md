### model _meta api

```python
from blog.models import Post, Author

# retrieving a single field instance of a model
>>> p = Post._meta.get_field('title')
>>> p
<django.db.models.fields.CharField: title>
>>> p.null
```

### post models
