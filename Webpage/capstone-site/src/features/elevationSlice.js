import { createSlice } from "@reduxjs/toolkit";
const allRuns = JSON.parse(localStorage.getItem("StravaData"));
const elevationOnly = allRuns.map((x) => x.total_elevation_gain);
const elevationCovered = elevationOnly.reduce((a, b) => a + b);
console.log(elevationCovered, "elevation covered");

export const elevationSlice = createSlice({
  name: "elevation",
  initialState: {
    value: 0,
    testValue: 0 + Math.round(elevationCovered * 3.33),
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    testIncrementByAmount: (state, action) => {
      state.testValue += action.payload;
    },
  },
});

export const { incrementByAmount, testIncrementByAmount } =
  elevationSlice.actions;
export default elevationSlice.reducer;
