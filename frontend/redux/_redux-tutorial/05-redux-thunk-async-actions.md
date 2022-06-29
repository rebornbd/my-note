# redux-thunk using async actions
- thunk-middleware allows us to return a function isntead of obejct
```js
const { default: axios } = require("axios");
const { default: thunk } = require("redux-thunk");
const {
  createStore,
  applyMiddleware
} = require("redux");


// define constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// define actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};


// define state & reducer
const initTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};
const todosReducer = (state = initTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};


// async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(getTodosFailed(error));
      });
  };
};


const store = createStore(
  todosReducer,
  applyMiddleware(thunk, )
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
```
