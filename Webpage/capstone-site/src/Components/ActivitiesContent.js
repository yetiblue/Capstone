import * as React from "react";
import { useEffect, useState } from "react";
import TitleAndContentComponent from "./TitleAndContentCardComponent";
import { useSelector } from "react-redux";

export default function ActivitiesContent(props) {
  const remainingMiles = useSelector((state) => state.totalDistance.testValue);
  const totalElevation = useSelector((state) => state.totalElevation.testValue);
  const dailySteps = useSelector((state) => state.totalSteps.testValue);
  return (
    <div className="App">
      <TitleAndContentComponent
        title="Step Counter"
        content={dailySteps}
        height="100px"
      />
      <TitleAndContentComponent
        title="Miles to Finish"
        content={remainingMiles}
        height="100px"
      />
      <TitleAndContentComponent
        title="Elevation Covered (ft)"
        content={totalElevation}
        height="100px"
      />
    </div>
  );
}
