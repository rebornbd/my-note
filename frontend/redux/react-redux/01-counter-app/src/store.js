import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { counterReducer } from "./services/reducers/counterReducer";


export const store = createStore(
  counterReducer,
  applyMiddleware(logger)
);
