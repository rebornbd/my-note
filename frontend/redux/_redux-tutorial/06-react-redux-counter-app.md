# react-redux counter app
- package: redux | react-redux
- yarn add redux react-redux
- optional: yarn add redux-thunk redux-logger
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
// services/constants/counterConstants.js
////////////////////
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";


////////////////////
// define actions
// services/actions/counterActions.js
////////////////////
import {
  INCREMENT,
  DECREMENT,
  RESET
} from "../constants/counterConstants";

export const incrementCounter = (value=1) => {
  return {
    type: INCREMENT,
    payload: value
  }
}
export const decrementCounter = (value=1) => {
  return {
    type: DECREMENT,
    payload: value
  }
}
export const resetCounter = () => {
  return {
    type: RESET
  }
}


////////////////////
// reducers
// services/reducers/counterReducer.js
////////////////////
import {
  INCREMENT,
  DECREMENT,
  RESET
} from "../constants/counterConstants";

const initCounterState = {
  count: 0
};
export const counterReducer = (state=initCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + (action.payload || 1)
      }
    
    case DECREMENT:
      return {
        ...state,
        count: state.count - (action.payload || 1)
      }
      
    case RESET:
      return {
        ...state,
        count: 0
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
import thunk from "redux-thunk"
import { logger } from "redux-logger";
import { counterReducer } from "./services/reducers/counterReducer";

export const store = createStore(
  counterReducer,
  applyMiddleware(thunk, logger)
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
// components/Counter.js
////////////////////
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from "../services/actions/counterActions";


const Counter = () => {
  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();


  return (
    <>
      <h1>REDUX COUNTER APP</h1>
      <span>{count}</span>

      <button type='button' onClick={() => dispatch(incrementCounter())}>INCREMENT</button>
      <button type='button' onClick={() => dispatch(decrementCounter())}>DECREMENT</button>
      <button type='button' onClick={() => dispatch(resetCounter())}>RESET</button>
    </>
  )
}

export default Counter;
```
