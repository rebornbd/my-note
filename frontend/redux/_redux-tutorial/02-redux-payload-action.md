# payload in action
```js
/*
STEPS ARE:
  01) define constants
  02) define actions
  03) reducer
  04) create store
  05) subscribe & dispatch
*/

// define constants
const GET_USERS = "GET_USERS";
const ADD_USER = "ADD_USER";


// define actions
const getUsers = () => {
  return {
    type: GET_USERS,
  }
}

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}


// reducer
const initUserState = {
  users: [],
  count: 0
}

const userReducer = (state=initUserState, action) => {
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


// create store
const { createStore } = require("redux");

const store = createStore(userReducer);


// subscribe & dispatch
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getUsers());
store.dispatch(addUser("rahim"));
store.dispatch(addUser("korim"));
```
