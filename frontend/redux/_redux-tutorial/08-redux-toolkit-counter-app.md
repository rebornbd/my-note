# redux-toolkit counter app
- yarn add @reduxjs/toolkit react-redux
#### collection of logic for a feature is called slices in redux
```js
/*
STEPS ARE:
  01) maintain folder structure
    src/features/counter/demoSlice.js | create slice
    src/app/store.js | create store
  02) create slice
  03) create store
*/


////////////////////
// create slice
// src/features/counter/counterSlice.js
////////////////////
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },

  reducers: {
    incrementCounter: (state, { payload = 1 }) => {
      state.count = state.count + payload
    },

    decrementCounter: (state, { payload = 1 }) => {
      state.count = state.count - payload
    },

    resetCounter: (state) => {
      state.count = 0
    }
  }
});

export const { incrementCounter, decrementCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;


////////////////////
// create store
// src/app/store.js
////////////////////
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
  middleware: [thunk, logger, ]
});

export default store;
```


### provide store
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./app/store";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
