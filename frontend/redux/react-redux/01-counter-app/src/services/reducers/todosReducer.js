import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS
} from "../constants/todosConstants";


const initTodosState = {
  data: [],
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
        data: action.payload,
        isLoading: false,
        error: null
      }
    
    case GET_TODOS_FAILED:
      return {
        ...state,
        error: action.payload,
        data: [],
        isLoading: false
      }
  
    default:
      return state;
  }
}
