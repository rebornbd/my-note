## session vs cookie


### cookie
```
size: 4kb
cookie is always store/set in the client side

'''
the minimus data to check & make dicission the server:
example:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaGltIiwiZXhwIjoiMjAyMC0xMi0wIn0.5YQIhSU0S-kOOIukGTFLmUoEoO_IJlZ4Ju5l9z_1VXk"
}
'''
```

### session
```
size: unlimited(server-side) | 5mb(client-side)
tripically session is store in the server side

'''
tracking the user based on cookie object
'''
```


### discurssion
```
basiclly http protocol is stateless(don't tract the privious recored) & it's not a smart way to serve the response.

so, first we need to make a smart or stateful protocol.
HERE, Sessions & Cookies are makes the http protocol stateful.
```

#### NB: every user request is passed with the cookie object

##### the end
