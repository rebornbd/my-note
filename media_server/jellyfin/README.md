### jellyfin api doc

<a href="https://app.swaggerhub.com/apis/vdts/jellyfin-server_api/" target="_blank">jellyfin api</a>


#### create a user:
```python
curl -X POST "http://127.0.0.1:8096/emby/Users/New?api_key=api_key" -H  "accept: application/json" -H  "Content-Type: application/json" -d "{\"Name\":\"new user\"}"
```

