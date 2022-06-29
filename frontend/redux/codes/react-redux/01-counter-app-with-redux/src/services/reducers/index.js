import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todosReducer } from "./todosReducer";


export const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});
