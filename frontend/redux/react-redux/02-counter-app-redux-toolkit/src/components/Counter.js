import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from "../features/counter/counterSlice";
import styles from "./Counter.module.css";


const Counter = () => {
  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();


  return (
    <div className={styles.container}>
      <h1>REDUX-TOOLKIT COUNTER APP</h1>
      <div className={styles.innerContainer}>
        <button type='button' onClick={() => dispatch(incrementCounter(5))}>+5</button>
        <button type='button' onClick={() => dispatch(incrementCounter())}>+1</button>
        <div className={styles.count}>{count}</div>
        <button type='button' onClick={() => dispatch(decrementCounter())}>-1</button>
        <button type='button' onClick={() => dispatch(decrementCounter(5))}>-5</button>
      </div>
      <button type='button' onClick={() => dispatch(resetCounter())}>RESET</button>
    </div>
  )
}

export default Counter;
