# combine multiple reducers
```js
// services/reducers/index.js
const { combineReducers } = require("redux");
const usersReducer = require("./usersReducer");
const todosReducer = require("./todosReducer");

const rootReducer = combineReducers({
  users: usersReducer,
  todos: todosReducer
});

const store = createStore(rootReduer);


// app.js | subscribe & dispatch
const {
  getUsers,
  addUser
} = require("./services/actions/usersActions");
const {
  getTodos,
  addTodo
} = require("./services/actions/todosActions");


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getUsers());
store.dispatch(getTodos());

store.dispatch(addUser("rahim"));
store.dispatch(addTodo("first todo item"));
```

### usersReducer.js
```js
// services/constants/usersConstants.js
export const GET_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER";


// services/actions/usersActions.js
export const getUsers = () => {
  return {
    type: GET_USERS,
  }
}
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}


// services/reducers/usersReducer.js
const initUserState = {
  users: [],
  count: 0
}
const usersReducer = (state=initUserState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
      }
    
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1
      }
    
    default:
      return state;
  }
}
export default usersReducer;
```


### todosReducer.js
```js
// services/constants/todosConstants.js
export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";


// services/actions/todosActions.js
export const getTodos = () => {
  return {
    type: GET_TODOS,
  }
}
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}


// services/reducers/todosReducer.js
const initTodoState = {
  users: [],
  count: 0
}
export const todosReducer = (state=initTodoState, action) => {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
      }
    
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
        count: state.count + 1
      }
    
    default:
      return state;
  }
}
export default todosReducer;
```
