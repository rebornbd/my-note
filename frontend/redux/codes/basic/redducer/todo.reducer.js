// constant | action type
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

// state
const initTodosState = {
  todos: [],
  isLoading: false,
  error: null
};

// action
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
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

// reducer
const todosReducer = (state=initTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      }
    
    case GET_TODOS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    
    default:
      return state
  }
}


module.exports = {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailed,
  todosReducer
};
