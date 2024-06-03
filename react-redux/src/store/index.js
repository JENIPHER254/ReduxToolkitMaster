//import configure store from redux toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

// create slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
  },
});
// create slice
const counter1Slice = createSlice({
  name: "counter1",
  initialState: { counter: 0 },
  reducers: {
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});
export const { increment, decrement } = counterSlice.actions;
export const { addBy } = counter1Slice.actions;
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    counter1: counter1Slice.reducer,
  },
});
export default store;
