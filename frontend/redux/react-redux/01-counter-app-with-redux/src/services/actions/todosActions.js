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


// api url
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// fetch data
export const getAllTodos = () => async (dispatch) => {
  dispatch(getTodosRequest());

  try {
    const res = await (await axiox.get(API_URL)).data;
    const todos = res.splice(0, 5);
    dispatch(getTodosSuccess(todos));
  } catch (err) {
    const errorMessage = err.message;
    dispatch(getTodosFailed(errorMessage));
  }
}
