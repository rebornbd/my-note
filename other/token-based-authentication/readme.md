### REACT | token based authentication - api call
#### In token based authentication axios api call & get access token by using refresh token & try to response.

### app.js | react-app

#### import
```js
import axios from "axios";
```

#### axios interceptors request
```js
axios.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem("accessToken");
    if (!!accessToken)
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    
    config.headers['Content-Type'] = 'application/json';

    return config;
  },

  error => {
    Promise.reject(error)
  }
);
```

#### axios interceptors response
```js
axios.interceptors.response.use(
  response => {
    return response
  },

  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === 'http://127.0.0.1:8000/user/signin/refresh-token') {
      console.log("!------PLEASE LOGIN------!");

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      // router.push('/login');

      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await refreshAccessToken();

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
)
```

#### refresh to Access Token
```js
const refreshAccessToken = async () => {
  localStorage.removeItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const res = await axios.post('http://127.0.0.1:8000/user/signin/refresh-token', {
    "refresh": refreshToken
  });
  const accessToken = res?.data?.access;

  localStorage.setItem("accessToken", accessToken);
  return accessToken;
}
```
