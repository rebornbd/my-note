import axiox from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// api url
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await axiox.get(API_URL);
  const data = res.data;
  const todos = data.splice(0, 10);
  return todos;
})


const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
    isLoading: false,
    error: null
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.data = [];
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
});

export default todoSlice.reducer;
