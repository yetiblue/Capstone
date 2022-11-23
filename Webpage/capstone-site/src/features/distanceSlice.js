import { createSlice } from "@reduxjs/toolkit";
const allRuns = JSON.parse(localStorage.getItem("StravaData"));
const distancesOnly = allRuns.map((x) => x.distance);
const distanceCovered = distancesOnly.reduce((a, b) => a + b);

export const distanceSlice = createSlice({
  name: "distance",
  initialState: {
    value: 3078,
    testValue: 3078 - Math.round(distanceCovered / 1609.344),
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
