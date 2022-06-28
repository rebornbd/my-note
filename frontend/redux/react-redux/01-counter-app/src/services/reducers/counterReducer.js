import {
  INCREMENT,
  DECREMENT,
  RESET
} from "../constants/counterConstants";


const initCounterState = {
  count: 0
};


export const counterReducer = (state=initCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
      
    case RESET:
      return {
        ...state,
        count: 0
      }
  
    default:
      return state;
  }
}
