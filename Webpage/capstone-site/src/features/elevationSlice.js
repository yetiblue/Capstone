import { createSlice } from "@reduxjs/toolkit";
const latestDistance = window.localStorage.getItem("newElevation");

export const elevationSlice = createSlice({
  name: "elevation",
  initialState: {
    value: 0,
    testValue: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      window.localStorage.setItem("newElevation", state.testValue);
    },
    testIncrementByAmount: (state, action) => {
      state.testValue += action.payload;
      window.localStorage.setItem("newElevation", state.testValue);
    },
  },
});

export const { incrementByAmount, testIncrementByAmount } =
  elevationSlice.actions;
export default elevationSlice.reducer;
