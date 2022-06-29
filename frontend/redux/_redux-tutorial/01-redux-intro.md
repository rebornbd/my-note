# Introduction to Redux
#### A Predictable State Container for JS Apps

### how redux works?
```
define state.
dispatch an Action.
Reducer update state based on Action Type.
store will update the view
```

### redux core concept
```js
/*
ALL STEPS:
  01) define constants
  02) define actions
  03) reducer
  04) create store
  05) subscribe & dispatch
*/

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
const resetCounter = () => {
  return {
    type: RESET,
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
    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// create store
const { createStore } = require("redux");

const store = createStore(counterReducer);


// subscribe & dispatch
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());
```
