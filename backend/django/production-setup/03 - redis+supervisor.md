
# celery in production using supervisor

###  install supervisor
```bash
sudo apt-get install supervisor
```

### add .conf file in supervisor
```bash
# sudo nano /etc/supervisor/conf.d/app_name.conf

[program:celery_demo_app]
command=/home/reborn/.pyenv/versions/venv/bin/celery --app=celery_demo worker --loglevel=info
directory=/home/reborn/Desktop/projects/python/celery_demo/

; process_num is required if you specify >1 numprocs
process_name=%(program_name)s-%(process_num)s

; If you want to run more than one worker instance, increase this
numprocs=1

user=reborn
autostart=true
autorestart=true
stdout_logfile=/home/reborn/Desktop/projects/python/celery_demo/logs/celeryd.log
redirect_stderr=true
```

### configuration to the server
```bash
sudo supervisorctl reread
sudo supervisorctl update

sudo service supervisor restart
```
