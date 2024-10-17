import { createSlice } from "@reduxjs/toolkit";
export const CounterSlicde = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});
export const { increment, decrement } = CounterSlicde.actions;
export default CounterSlicde.reducer;
