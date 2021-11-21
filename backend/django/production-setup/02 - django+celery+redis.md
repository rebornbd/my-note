# django asynchronous tasks with redis & celery

### step 01: [link1](https://redis.io/download#from-the-official-ubuntu-ppa) [link2](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04)
```bash
# redis install
sudo add-apt-repository ppa:redislabs/redis
sudo apt-get update
sudo apt-get install redis

# redis config
sudo nano /etc/redis/redis.conf
"""
supervised systemd
"""

sudo systemctl restart redis
redis-cli pink
```

### step 02:
```bash
# create python virtual env
pyenv virtualenv 3.8.6 venv

# activate env
pyenv active venv

# install dependencies
pip install Django Celery redis
```

### step 03:
```py
# create project
django-admin startproject pro_demo
cd pro_demo
```

### step 04:
```txt
pro_demo
|
|___ + __init__.py
|___ + settings.py
|___ + celery.py    (create this file)
|___ + .....
```

### step 05:
```py
# celery.py | add beloy code
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pro_demo.settings')

app = Celery('pro_demo')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()
```

### step 06:
```py
# __init__.py | add beloy code
from .celery import app as celery_app

__all__ = ('celery_app',)
```

### step 07:
```py
# settings.py | add it the bottom
# celery
CELERY_BROKER_URL = 'redis://localhost:6379'
CELERY_RESULT_BACKEND = 'redis://localhost:6379'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TASK_SERIALIZER = 'json'
CELERY_TIMEZONE = 'Asia/Dhaka'
```

### step 08:
```py
# create an app
python manage.py startapp myapp

# install myapp
#  ...........

# create tasks.py | add below code
from celery import shared_task

@shared_task
def add_task(a, b):
    return a + b
```

# TESTING
### start worker:
```py
pyenv activate venv
cd ~/pro_demo

# celery worker --help
# celery -A pro_demo worker -l INFO
celery --app=pro_demo worker --loglevel=info
```

### run python shell
```py
pyenv activate venv
cd ~/pro_demo

from myapp.tasks import add_task as add

t1 = add.delay(10, 10)

t1.status
t1.state

t1.result
t1.get()
```
