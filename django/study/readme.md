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
    >> cached sessions              | SESSION_ENGINE = 'django.contrib.sessions.backends.cache' or 'django.contrib.sessions.backends.cached_db'
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
# 04) Caching strategies:
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

```py
# 05) User authentication:
# ========================
from django.contrib.auth import authenticate, login

def user_authView(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
    else:
        # Return an 'invalid login' error message.
        pass
```

```py
# 06) Response lifecycle:
# =======================
'''
Layers of Django Application:
-----------------------------
    >> Request Middlewares
    >> URL Router(URL Dispatcher)
    >> Views
    >> Context Processors
    >> Template Renderers
    >> Response Middlewares
'''
```
![djangoLifeCycle](https://i.ibb.co/W2fXjsK/1-V5-Rd2-Czu9-TYd-Ew6-P-7-Rt-GA.png)


```py
# 07) Use of Middleware:
# ======================
# DEFINITION:
# -----------
'''
In Django, middleware is a lightweight plugin that processes during request and response execution. 
Middleware is used to perform a function in the application. The functions can be a security, 
session, csrf protection, authentication etc.
'''

# BUILT-IN MIDDLEWARE:
# --------------------
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# CREATING OWN MIDDLEWARE:
# ------------------------
class SimpleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.

        response = self.get_response(request)

        # Code to be executed for each request/response after
        # the view is called.

        return response
```

```py
# 08) Django exceptions:
# ======================
# DEFINITION:
# -----------
'''
An exception is an event, which occurs during the execution of a program, 
that interrupt/break the normal flow of the program's instructions.
'''

# some django core exceptions
'''
AppRegistryNotReady         ObjectDoesNotExist      EmptyResultSet      FieldDoesNotExist
MultipleObjectsReturned     SuspiciousOperation     PermissionDenied    ViewDoesNotExist
ImproperlyConfigured        MiddlewareNotUsed       FieldError          ValidationError
SynchronousOnlyOperation    BadRequest              RequestAborted

####### url resolver exceptions ##########################################################
Resolver404                 NoReverseMatch
'''
```

```py
# 09) File upload concepts:
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

```py
# 10) Context Processors:
# =======================
# INTRODUCTION:
# -------------
'''
A context processor has a simple interface: it’s a Python function that takes one argument,
an HttpRequest object, and returns a dictionary that gets added to the template context.
Each context processor must return a dictionary
'''
# USED OF CONTEXT PROCESSOR:
# --------------------------
'''
Your project have a header menu with some categories. And you show the categories with all pages.

CASE 01 | context dict:
    solve by pass every views as context dict.

CASE 02: | context processor:
    create you own context processor & pass the categories & add it settings.py.
'''

# CREATE CONTEXT PROCESSOR:
# -------------------------
##### assume: appName -> myapp ####################
# touch myapp/custom_context_processor.py
# custom_context_processor.py

from .models import Categorie
def categorie_renderer(request):
    categories = Categorie.objects.all()
    res = {}
    res['categories'] = categories
    return res

# CONFIGURE TO SETTINGS:
# ----------------------
#### settings.py #######
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                
                'myapp.context_processors.categorie_renderer',
            ],
        },
    },
]
```
