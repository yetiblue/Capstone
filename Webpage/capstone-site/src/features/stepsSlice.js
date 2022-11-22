import { createSlice } from "@reduxjs/toolkit";
const latestDistance = window.localStorage.getItem("newSteps");

export const stepsSlice = createSlice({
  name: "steps",
  initialState: {
    value: 0,
    testValue: 0,
  },
  reducers: {
    incrementSteps: (state, action) => {
      state.value += action.payload;
      window.localStorage.setItem("newSteps", state.testValue);
    },
    testIncrementSteps: (state, action) => {
      state.testValue += action.payload;
      window.localStorage.setItem("newSteps", state.testValue);
    },
  },
});

export const { incrementSteps, testIncrementSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
