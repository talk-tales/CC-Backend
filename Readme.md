
# API Documentation

## Register User API

Endpoint :  POST /api/users

Request Body :

```json
{ 
  "username" : "ucup",
  "email" : "ucup@gmail.com",
  "password" : "rahasia"
}
```

Response Body Success :

```json
{
  "data" : {
    "username" : "ucup",
    "email" : ""
  }
}
```

Response Body Error :

```json
{
  "errors" : "Username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body :

```json
{
  "email" : "ucup@gmail.com",
  "password" : "rahasia"
}
```

Response Body Success :

```json
{
  "data" : {
    "token" : "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Username or password wrong"
}
```
