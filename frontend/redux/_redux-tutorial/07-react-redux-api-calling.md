# react-redux api calling & update state
- packages: redux | react-redux | redux-thunk | axios
- yarn add redux react-redux redux-thunk axios
```js
/*
STEPS ARE:
  01) define constants
  02) define actions
  03) reducers
  04) create store
  05) provide store
  06) use store
*/


////////////////////
// define constants
// services/constants/todosConstants.js
////////////////////
export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";


////////////////////
// define actions
// services/actions/todosActions.js
////////////////////
import axiox from "axios";
import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
} from "../constants/todosConstants";

const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST
  }
}
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos
  }
}
const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error
  }
}

export const getAllTodos = () => async (dispatch) => {
  dispatch(getTodosRequest());

  try {
    const res = await (await axiox.get("https://jsonplaceholder.typicode.com/todos")).data;
    const todos = res.splice(0, 5);
    dispatch(getTodosSuccess(todos));
  } catch (err) {
    const errorMessage = err.message;
    dispatch(getTodosFailed(errorMessage));
  }
}


////////////////////
// reducers
// services/reducers/todosReducer.js
////////////////////
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS
} from "../constants/todosConstants";

const initTodosState = {
  todos: [],
  isLoading: false,
  error: null
};

export const todosReducer = (state=initTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
        error: null
      }
    
    case GET_TODOS_FAILED:
      return {
        ...state,
        todos: [],
        isLoading: false,
        error: action.payload
      }
  
    default:
      return state;
  }
}


////////////////////
// create store
// src/store.js
////////////////////
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./services/reducers/todosReducer";

export const store = createStore(
  todosReducer,
  applyMiddleware(thunk, )
);


////////////////////
// provide store
// index.js
////////////////////
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


////////////////////
// use store
// components/Todos.js
////////////////////
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosAction";

const Todos = () => {
  const { todos, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>REACT-REDUX API CALL</h1>
      
      { isLoading && <h1>Loading...</h1>  }
      { error && <h1>{error}</h1>  }
      { data && data.map(todo => (
        <div key={todo.id}>
          <h5>{todo.id}</h5>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Todos;
```
