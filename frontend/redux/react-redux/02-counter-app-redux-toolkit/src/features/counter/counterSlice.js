import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    incrementCounter: (state, { payload = 1 }) => {
      state.count = state.count + payload
    },

    decrementCounter: (state, { payload = 1 }) => {
      state.count = state.count - payload
    },

    resetCounter: (state) => {
      state.count = 0
    }
  }
});

export const { incrementCounter, decrementCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;
