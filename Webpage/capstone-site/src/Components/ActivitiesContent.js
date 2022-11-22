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
  localStorage.setItem("pageReloads", 0); //makes this counter exist

  useEffect(() => {
    const firstLoad = localStorage.getItem("pageReloads");
    if (props.data.length !== 0) {
      const convertedDistance = Math.round(props.data.distance / 1609);
      if (firstLoad === 0) {
        //without this counter all localStorage values would reset to 0 (default) every reload
        localStorage.setItem("pageReloads", 1);
        localStorage.setItem("differentRuns", 0);
        localStorage.setItem("distanceTotal", 0);
      } else {
        const previousDistance = localStorage.getItem("differentRuns");
        const storedTotal = localStorage.getItem("distanceTotal");
        const currentTotal = Number(storedTotal) + Number(convertedDistance);
        //prevents running total from changing if no new data upon reload
        if (Number(previousDistance) !== Number(convertedDistance)) {
          localStorage.setItem("distanceTotal", currentTotal);
          localStorage.setItem("differentRuns", convertedDistance);
        }
      }
      dispatch(testDecrementByAmount(convertedDistance));
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
      />
      <TitleAndContentComponent
        title="Miles to Finish"
        content={remainingMiles}
      />
    </div>
  );
}
