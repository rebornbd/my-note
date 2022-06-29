# Middleware
- popular redux middlewares: redux-logger, redux-thunk
- yarn add redux-thunk redux-logger
```js
// middleware are added in create store
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { default: logger } = require("redux-logger");


// create store
const store = createStore(
  usersReducer,
  applyMiddleware(thunk, logger) // add here
);
```
