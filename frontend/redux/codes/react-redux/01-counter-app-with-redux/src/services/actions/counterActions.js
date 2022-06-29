import {
  INCREMENT,
  DECREMENT,
  RESET
} from "../constants/counterConstants";


export const incrementCounter = (value=1) => {
  return {
    type: INCREMENT,
    payload: value
  }
}

export const decrementCounter = (value=1) => {
  return {
    type: DECREMENT,
    payload: value
  }
}

export const resetCounter = () => {
  return {
    type: RESET
  }
}
