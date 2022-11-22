import * as React from "react";
import { useEffect } from "react";
import TitleAndContentComponent from "./TitleAndContentCardComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementByAmount,
  //   selectDistance,
  testDecrementByAmount,
} from "../features/distanceSlice";

export default function ActivitiesContent(props) {
  useEffect(() => {
    console.log(props, "Props");
    if (props.data.length !== 0) {
      const convertedDistance = Math.round(props.data.distance / 1609);
      console.log("ran");
      dispatch(testDecrementByAmount(convertedDistance));
    }
  }, [props.data.length]);
  const remainingMiles = useSelector((state) => state.distance.testValue);
  const dispatch = useDispatch();
  const todaysMiles = props.data.distance / 1609;
  const dailySteps = Math.round(props.data.average_cadence * 2);
  return (
    <div className="App">
      <TitleAndContentComponent
        title="Step Counter"
        content={props.data.dailySteps}
      />
      <TitleAndContentComponent
        title="Miles to Finish"
        content={remainingMiles}
      />
    </div>
  );
}
