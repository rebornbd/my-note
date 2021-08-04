### DJANGO Intermediate Tropic

##### ** [link](https://www.interviewbit.com/django-interview-questions/#django-intermediate-questions)
```
01) Django Signals
02) Django cookie
03) Django session
04) Caching strategies
05) User authentication
06) Response lifecycle
07) Use of Middleware
08) Django exceptions
09) File upload concepts
10) Context Processors
```

##### Intermediate Tropic Answer:
```py
# 01) Django Signals:
# ===================
from django.db.models.signals import pre_save
from django.dispatch import receiver
from myapp.models import MyModel

@receiver(pre_save, sender=MyModel)
def presave_handler(sender, instance, *args, **kwargs):
    # sender = the model class
    # instance = the actual object
    pass

@receiver(post_save, sender=MyModel)
def postsave_handler(sender, instance, created, *args, **kwargs):
    # sender = the model class
    # instance = the actual object
    # created = true: a new record was created | false: otherwise
    pass

##### SIGNALS LIST #####
# ----------------------
'''
model signals:
    pre_init
    post_init
    pre_save
    post_save
    pre_delete
    post_delete
    m2m_changed
    class_prepared

management signals:
    pre_migrate
    post_migrate

request/response signals:
    request_started
    request_finished
    got_request_exception
'''
```

```py
# 02) Django cookie:
# ==================
def my_cookie(request):
    name = request.COOKIES.get('name')
    
    # json with cookie
    res = JsonResponse({"foo": "bar"})
    res.set_cookie(key='key1', value='value1', max_age=3600)
    
    # template with cookie
    res = render(request, 'myapp/base.html', {})
    res.set_cookie('name', 'value')
    return res
```

```py
# 03) Django session:
# ===================
'''
configuring the session engine:
------------------------------
    >> db-backed sessions (default) | SESSION_ENGINE = 'django.contrib.sessions.backends.db'
    >> cached sessions              | SESSION_ENGINE = 'django.contrib.sessions.backends.cache' or 'django.contrib.sessions.backends.cache_db'
    >> file-based sessions          | SESSION_ENGINE = 'django.contrib.sessions.backends.file'
    >> cookie-based sessions        | SESSION_ENGINE = 'django.contrib.sessions.backends.signed_cookies'
'''
# cached sessions:
# ----------------
CACHES = {
    'default': {
        'BACKEND': 'redis_cache.RedisCache',
        'LOCATION': 'redis://127.0.0.1:6379/1'
    }
}

SESSION_ENGINE = "django.contrib.sessions.backends.cache"
```

```py
# 02) Caching strategies:
# =======================
#### mem-cache
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.PyMemcacheCache',
        'LOCATION': '127.0.0.1:11211',
    }
}

#### custom-cache | redis
CACHES = {
    'default':{
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': 'redis://127.0.0.1:6379/1'
    }
}

##### CACHE LIST #####
'''
Memcached
Database caching
    >> Creating the cache table
    >> Multiple databases
Filesystem caching
Local-memory caching
Dummy caching (for development)
Using a custom cache backend
    >> redis
    >> rabbitmq
'''
```

```
03) User authentication
04) Response lifecycle
05) Use of Middleware
06) Django exceptions
```

```py
# 07) File upload concepts:
# =========================

# settings.py:
# ------------
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# root urls.py:
# -------------
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Project url patterns...
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# models.py:
# ----------
from django.db import models

class Profile(models.Model):
    name     = models.CharField(max_length=255, blank=True)
    pro_pic  = models.FileField()
    uploaded = models.DateTimeField(auto_now_add=True)

# templates | upload.html:
# ------------------------
'''
{% extends 'base.html' %}
{% load static %}

{% block content %}
  <form method="post" enctype="multipart/form-data">
    {% csrf_token %}
    <input type="file" name="pro_pic" />
    <button type="submit">Upload</button>
  </form>
{% endblock %}
'''

# views.py:
# ---------
from django.shortcuts import render
from django.conf import settings
from django.core.files.storage import FileSystemStorage

def upload(request):
    if request.method == 'POST' and request.FILES['pro_pic']:
        pro_pic = request.FILES['pro_pic']
        
        BASE_URL = settings.get('BASE_URL')
        fs = FileSystemStorage(BASE_URL + "/media/profiles/")
        filename = fs.save(pro_pic.name, pro_pic)
        pro_pic_url = fs.url(filename)
        return render(request, 'core/upload.html', { 'pro_pic_url' : pro_pic_url })
    
    return render(request, 'core/upload.html')
```
