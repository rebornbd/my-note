const { createStore } = require("redux");


// constant | action type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// state
const initCounterState = { count: 0 };

// action
const incrementCounter = (value=1) => {
  return {
    type: INCREMENT,
    payload: value
  }
}

const decrementCounter = (value=1) => {
  return {
    type: DECREMENT,
    payload: value
  }
}

const resetCounter = () => {
  return {
    type: RESET
  }
}

// reducer
const countReducer = (state=initCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + (action.payload || 1)
      }
    
    case DECREMENT:
      return {
        ...state,
        count: state.count - (action.payload || 1)
      }
    
    case RESET:
      return {
        ...state,
        count: 0
      }
  
    default:
      return state
  }
}

// store
const store = createStore(countReducer);

store.subscribe(() => {
  console.log("CURRENT STORE:", store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter(4));
store.dispatch(incrementCounter(5));
store.dispatch(incrementCounter(5));
store.dispatch(decrementCounter(20));
store.dispatch(resetCounter());


module.exports = store;
