import { createSlice } from "@reduxjs/toolkit";
const latestDistance = window.localStorage.getItem("newDistance");

export const distanceSlice = createSlice({
  name: "distance",
  initialState: {
    value: 3078,
    testValue: 3078,
  },
  reducers: {
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    testDecrementByAmount: (state, action) => {
      state.testValue -= action.payload;
    },
  },
});

export const { decrementByAmount, testDecrementByAmount } =
  distanceSlice.actions;
export default distanceSlice.reducer;
