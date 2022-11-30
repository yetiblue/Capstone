import { createSlice } from "@reduxjs/toolkit";
let distanceCovered = 0;
const allRuns = JSON.parse(localStorage.getItem("StravaData"));
if (allRuns !== null) {
  const distancesOnly = allRuns.map((x) => x.distance);
  distanceCovered = distancesOnly.reduce((a, b) => a + b);
  console.log(distanceCovered, "covered");
}
export const distanceSlice = createSlice({
  name: "distance",
  initialState: {
    value: 3078 - Math.round(distanceCovered / 1609.344),
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
