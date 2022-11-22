// import rotateReducer from "reducers/rotateReducer";

// function configureStore(state = { rotating: true }) {
//   return createStore(rotateReducer, state);
// }

// export default configureStore;
import { configureStore } from "redux";

export default configureStore({
  reducer: {
    totalElevation: "foo",
    totalDistance: "foo",
    totalSteps: "foo",
  },
});
