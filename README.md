# Fashion Cloud

Your task is to build a REST API that exposes methods to interact with a cache that you will
build. You will have to use Node.js and Express.js to build the API and MongoDB to store the
cache data in. The cache does not have another data source in the background that is cached.
All data returned by the cache is random dummy data. You do not need to build a frontend.
The API shall be used with tools like curl or Postman.

## GET request  /cache

This API Path will list down all cache entries that exists in a database.

## GET request  /cache/{key}

This API will return the particular information against the provided key

## POST request  /cache/{key}

This API will add a key in the database against the information provided

## DELETE request /cache/{key}

This API will delete the particular entry against the key provided

## DELETE request /cache

This API call will remove all entries from database

## Run project

1) Install app dependencies.
```javascript
npm install
```

2) Run the tests
```javascript
npm run test
```
3) Run APP
```javascript
node app.js
```
