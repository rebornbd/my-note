import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },

  reducers: {
    getTodosRequest: (state) => {
      state.isLoading = true
    },

    getTodosSuccess: (state, action) => {
      state.data = action.payload
      state.isLoading = false
      state.error = null
    },

    getTodosFailed: (state, action) => {
      state.data = []
      state.isLoading = false
      state.error = action.payload
    }
  }
});

export const { getTodosRequest, getTodosSuccess, getTodosFailed } = todoSlice.actions;
export default todoSlice.reducer;
