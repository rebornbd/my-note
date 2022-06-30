# redux vs redux-toolkit

## intro
- yarn add redux
- yarn add @reduxjs/toolkit
```js
////////////////////
// redux
// STEPS ARE:
//  1) define constants
//  2) define actions
//  3) reducer
//  4) create store
////////////////////
// constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// actions
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// initState & reducer
const initialCounterState = {
  count: 0,
};
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// create store
const { createStore } = require("redux");
const store = createStore(counterReducer);


////////////////////
// redux-toolkit
// STEPS ARE:
//  1) create slice
//  2) create store
////////////////////
// create slice
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
  }
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;

// create store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
```

## combine reducer
```js
////////////////////
// redux
////////////////////
const { combineReducers, createStore } = require("redux");
const usersReducer = require("./usersReducer");
const todosReducer = require("./todosReducer");

const rootReducer = combineReducers({
  users: usersReducer,
  todos: todosReducer
});

const store = createStore(rootReduer);


////////////////////
// redux-toolkit
////////////////////
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/user/usersSlice";
import todosReducer from "../features/todo/todosSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer
  },
});
```

## apply middleware
```js
////////////////////
// redux
////////////////////
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { default: logger } = require("redux-logger");

const store = createStore(
  usersReducer,
  applyMiddleware(thunk, logger, )
);


////////////////////
// redux-toolkit
////////////////////
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer
  },
  middleware: [thunk, logger, ]
});
```

## async api call
- yarn add redux-thunk
```js
////////////////////
// redux
// STEPS ARE:
//  1) define constants
//  2) define actions
//  3) reducer
//  4) async action creator
//  4) create store
////////////////////
// define constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

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

// reducer
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

// async action creator | using redux-thunk middleware
const fetchData = () => async (dispatch) => {
  dispatch(getTodosRequest());
  try {
    const res = await axios.get(API_URL);
    const data = res.data;
    const todos = data.splice(0, 5);
    dispatch(getTodosSuccess(todos));
  }
  catch (err) {
    const error = err.message;
    dispatch(getTodosFailed(error));
  }
}

// create store
const store = createStore(
  todosReducer,
  applyMiddleware(thunk, )
);

// subscribe & dispatch
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchData());


////////////////////
// redux-toolkit
// STEPS ARE:
//  1) create slice
//  2) create store
////////////////////
import axiox from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await axiox.get("https://jsonplaceholder.typicode.com/todos");
  const data = res.data;
  const todos = data.splice(0, 5);
  return todos;
});

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

// create store
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
```
