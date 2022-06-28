////////////////////
// redux-thunk middleware | asynchronous task handle
////////////////////
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: thunk } = require("redux-thunk");
const { default: axios } = require("axios");
const {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailed,
  todosReducer
} = require("../../redducer");


// api url
const API_URL = "https://jsonplaceholder.typicode.com/todos"

// fetch Data
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());

    axios.get(API_URL)
      .then(res => res.data)
      .then(res => {
        const todos = res.map(todo => todo.title);
        const fixedTodos = todos.splice(0, 5);
        dispatch(getTodosSuccess(fixedTodos));
      })
      .catch(err => {
        const message = err.message;
        dispatch(getTodosFailed(message));
      })
  }
}


// store
const store = createStore(
  todosReducer,
  applyMiddleware(thunk, logger)
);


store.subscribe(() => {
  // console.log(store.getState());
});

store.dispatch(fetchData());
