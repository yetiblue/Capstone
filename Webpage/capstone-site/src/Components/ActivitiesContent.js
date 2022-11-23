import * as React from "react";
import { useEffect, useState } from "react";
import TitleAndContentComponent from "./TitleAndContentCardComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementByAmount,
  testDecrementByAmount,
} from "../features/distanceSlice";
import {
  incrementByAmount,
  testIncrementByAmount,
} from "../features/elevationSlice";
import { incrementSteps, testIncrementSteps } from "../features/stepsSlice";
export default function ActivitiesContent(props) {
  const dispatch = useDispatch();
  //   localStorage.setItem("pageReloads", 0); //makes this counter exist

  useEffect(() => {
    if (props.data.length !== 0) {
      const todaysDistance = Math.round(props.data.distance / 1609);

      dispatch(testDecrementByAmount(todaysDistance));

      const convertedElevation = Math.round(
        props.data.total_elevation_gain * 3.333
      );
      dispatch(testIncrementByAmount(convertedElevation));
    }
  }, [props.data.length]);

  const remainingMiles = useSelector((state) => state.totalDistance.testValue);
  const totalElevation = useSelector((state) => state.totalElevation.testValue);
  const dailySteps = Math.round(props.data.average_cadence * 2);
  return (
    <div className="App">
      <TitleAndContentComponent
        title="Step Counter"
        content={props.data.dailySteps}
        height="100px"
      />
      <TitleAndContentComponent
        title="Miles to Finish"
        content={remainingMiles}
        height="100px"
      />
    </div>
  );
}
