# redux-toolkit api calling
- yarn add @reduxjs/toolkit react-redux redux-thunk axios
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
// src/features/todo/todoSlice.js
////////////////////
import axiox from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// api url
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await axiox.get(API_URL);
  const data = res.data;
  const todos = data.splice(0, 10);
  return todos;
})

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.data = [];
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export default todoSlice.reducer;


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

### use store
```js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../features/todo/todoSlice";

const Todo = () => {
  const { data, error, isLoading } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h1>REACT-TOOLKIT API CALL</h1>
      
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

export default Todo;
```
