import axiox from "axios";
import {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailed
} from "./todoSlice";


// api url
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// fetch data
export const getAllTodos = () => async (dispatch) => {
  dispatch(getTodosRequest());

  try {
    const res = await (await axiox.get(API_URL)).data;
    const todos = res.splice(0, 10);
    dispatch(getTodosSuccess(todos));
  } catch (err) {
    const errorMessage = err.message;
    dispatch(getTodosFailed(errorMessage));
  }
}
