import React, { useState, useEffect, useReducer } from 'react'

const initialState = {
  count: 0
}

const reducer = (state, action) => {
  // console.log("state:", state);
  // console.log("action:", action);

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + (action.increase || 1)
      };
    
    case 'DECREMENT':
      return {
        count: state.count - (action.decrease || 1)
      };
    
    default:
      return state;
  }
}


const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const styles = {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    gap: "20px"
  };
  const btnStyles = {
    minWidth: '100px',
    minHeight: "100px",
    fontSize: "30px"
  }


  return (
    <div style={styles}>
      <button onClick={() => dispatch({ type: "INCREMENT", increase: 2 })} style={btnStyles}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "DECREMENT", decrease: 2 })} style={btnStyles}>-</button>
    </div>
  )
}

export default Count;
