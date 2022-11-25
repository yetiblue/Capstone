import { createSlice } from "@reduxjs/toolkit";
const allRuns = JSON.parse(localStorage.getItem("StravaData"));
let stepsCovered = 0;
if (allRuns !== null) {
  const stepsOnly = allRuns.map(
    (x) => x.average_cadence * 2 * (x.moving_time / 60)
  );
  stepsCovered = stepsOnly.reduce((a, b) => a + b);
  console.log(stepsCovered, "steps");
}

export const stepsSlice = createSlice({
  name: "steps",
  initialState: {
    value: 0 + stepsCovered,
    testValue: 0 + Math.round(stepsCovered),
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
