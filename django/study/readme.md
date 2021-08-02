### DJANGO Intermediate Tropic

##### ** [link](https://www.interviewbit.com/django-interview-questions/#django-intermediate-questions)
```
01) Django Signals
02) Caching strategies
03) User authentication
04) Response lifecycle
05) Use of Middleware
06) Django exceptions
07) File upload concepts
```

##### Intermediate Tropic Answer:
```py
# 01) Django Signals:
# ===================
from django.db.models.signals import pre_save
from django.dispatch import receiver
from myapp.models import MyModel

@receiver(pre_save, sender=MyModel)
def presave_handler(sender, instance, raw, using, *args, **kwargs):
    # sender = the model class
    # instance = the actual object
    pass

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
```

```
02) Caching strategies
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
