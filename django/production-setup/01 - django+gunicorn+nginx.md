# django deploy in production

### create env & install
```bash
# create
pyenv install 3.8.6
pyenv virtualenv 3.8.6 my_env
pyenv activate my_env

# install
pip install django gunicorn
```

### creating socket & service for Gunicorn

##### socket [gunicorn.socket]
```bash
# /etc/systemd/system/gunicorn.socket

[Unit]
Description=gunicorn socket

[Socket]
ListenStream=/run/gunicorn.sock
ListenStream=0.0.0.0:8000

[Install]
WantedBy=sockets.target
```

##### service [gunicorn.service]
```bash
# /etc/systemd/system/gunicorn.service

[Unit]
Description=gunicorn daemon
Requires=gunicorn.socket
After=network.target

[Service]
User=reborn
Group=www-data
WorkingDirectory=/home/reborn/myprodir/mypro
ExecStart=/home/reborn/.pyenv/versions/my_env/bin/gunicorn \
          --access-logfile - \
          --workers 3 \
          --bind unix:/run/gunicorn.sock \
          mypro.wsgi:application

[Install]
WantedBy=multi-user.target
```

### start & enable the Gunicorn socket
```bash
sudo systemctl start gunicorn.socket
sudo systemctl enable gunicorn.socket
```

### check & run
```bash
sudo systemctl status gunicorn.socket

sudo systemctl daemon-reload
sudo systemctl restart gunicorn
```

---
---

### configure Nginx Proxy Pass to Gunicorn
```bash
# /etc/nginx/sites-available/myproject

server {
    listen 80;
    server_name 127.0.0.1;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/reborn/myprodir/mypro;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```

### linking it to the sites-enabled
```bash
sudo ln -s /etc/nginx/sites-available/myproject /etc/nginx/sites-enabled
```

### check syntax errors & restart
```bash
sudo nginx -t
sudo systemctl restart nginx
```

# <center>the end!</center>
