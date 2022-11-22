import { configureStore } from "@reduxjs/toolkit";
import distanceReducer from "./features/distanceSlice";
import elevationReducer from "./features/elevationSlice";
import stepsReducer from "./features/stepsSlice";

export default configureStore({
  reducer: {
    totalElevation: elevationReducer,
    distance: distanceReducer,
    totalSteps: stepsReducer,
  },
});
