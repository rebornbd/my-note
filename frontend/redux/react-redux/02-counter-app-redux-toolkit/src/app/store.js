import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
  middleware: [thunk, logger]
});

export default store;
