## jellyfin api doc <a href="https://app.swaggerhub.com/apis/vdts/jellyfin-server_api/" target="_blank">jellyfin api</a>

#### 01) create user
```python
curl -X POST "http://127.0.0.1:8096/emby/Users/New?api_key=<enter_apikey>" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"Name\":\"new user\"}"
```

#### 02) get all user
```python
curl -X GET "http://127.0.0.1:8096/emby/Users?api_key=<enter_apikey>" -H  "accept: application/json" -H  "Content-Type: application/json"
```
