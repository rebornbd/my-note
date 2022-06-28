import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from "../services/actions/counterActions";
import styles from "./Counter.module.css";


const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();


  return (
    <div className={styles.container}>
      <h1>REDUX COUNTER APP</h1>
      <div className={styles.innerContainer}>
        <button type='button' onClick={() => dispatch(incrementCounter())}>+</button>
        <div className={styles.count}>{count}</div>
        <button type='button' onClick={() => dispatch(decrementCounter())}>-</button>
      </div>
      <button type='button' onClick={() => dispatch(resetCounter())}>RESET</button>
    </div>
  )
}

export default Counter;
