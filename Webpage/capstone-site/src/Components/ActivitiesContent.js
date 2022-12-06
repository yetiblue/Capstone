import * as React from "react";
import { useEffect, useState } from "react";
import TitleAndContentCard from "./TitleAndContentCard";
import LocationCard from "./LocationCard";
import { useSelector } from "react-redux";
import WeatherCard from "./WeatherCard";
import "./ActivitiesContent.css";
import DayCard from "./DayCard";

export default function ActivitiesContent(props) {
  const [locationData, setLocationData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [remainingMiles, setRemainingMiles] = useState();
  const [totalElevation, setTotalElevation] = useState();
  const [dailySteps, setDailySteps] = useState();
  useEffect(() => {
    //make sure there's actually data coming in to pass to components.
    //otherwise there'll be a render error
    if (props.data.length !== 0) {
      const endpoint = "mapbox.places";
      let distanceCovered = 0;
      let elevationCovered = 0;
      let stepsCovered = 0;

      const allRuns = JSON.parse(localStorage.getItem("StravaData"));
      if (allRuns !== null) {
        //Adding together the values from the activities array
        const distancesOnly = allRuns.map((x) => x.distance);
        distanceCovered = distancesOnly.reduce((a, b) => a + b);
        const elevationOnly = allRuns.map((x) => x.total_elevation_gain);
        elevationCovered = elevationOnly.reduce((a, b) => a + b);
        const stepsOnly = allRuns.map(
          (x) => x.average_cadence * 2 * (x.moving_time / 60)
        );
        stepsCovered = stepsOnly.reduce((a, b) => a + b);
      }
      setRemainingMiles(3078 - Math.round(distanceCovered / 1609.344));
      setTotalElevation(0 + Math.round(elevationCovered * 3.33));
      setDailySteps(0 + Math.round(stepsCovered));

      const longitude = props.data.start_latlng[1];
      const latitude = props.data.start_latlng[0];
      const getLocation = `https://api.mapbox.com/geocoding/v5/${endpoint}/${longitude},${latitude}.json?access_token=pk.eyJ1IjoieWV0aWJsdWUiLCJhIjoiY2xhdmxsOWVtMDZ5bzNwbzd2N3Y2bG1haiJ9.GXc7ecH3Jtp3YArh-6CLWQ`;
      const getWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=25c7fee7d8e9c629fbb2fcb930882817`;
      fetch(getLocation)
        .then((res) => res.json())
        .then((data) => setLocationData(data.features));
      fetch(getWeather)
        .then((res) => res.json())
        .then((data) => setWeatherData(data));
    }
  }, [props.data.length]);

  const latlang = props.data.start_latlng;
  const todaysDistance = (props.data.distance / 1609).toFixed(2);
  console.log("Load data 1");
  return (
    <div className="widget-wrapper">
      <div className="widget-content__grid__item">
        <LocationCard
          title="Current Location"
          content={locationData}
          coords={latlang}
        />
      </div>
      <div className="widget-wrapper__content">
        <div className="widget-content__grid">
          <div className="widget-content__grid__item">
            <WeatherCard title="Weather" content={weatherData} />
          </div>
          <div className="widget-content__grid__item">
            <TitleAndContentCard
              title="Elevation Covered (ft)"
              content={totalElevation}
              height="198px"
              width="175px"
              fontSize="h4"
              className="widget-content__grid__item"
              color="#FFB4AB"
              chartSize="0"
            />
          </div>
        </div>

        <div className="widget-content__grid">
          <div className="widget-content__grid__item">
            <DayCard
              title="Day"
              content="70"
              height="120px"
              color="#FFC107"
              x
            />
          </div>

          <div className="widget-content__grid__item">
            <TitleAndContentCard
              title="Miles Left"
              content={remainingMiles}
              height="200px"
              width="175px"
              color="#D9EC7A"
              fontSize="'h4'"
              chartSize="100"
              className="widget-content__grid__item"
            />
          </div>
          <div className="widget-content__grid__item">
            <TitleAndContentCard
              title="Today's Distance (mi)"
              content={todaysDistance}
              height="170px"
              width="175px"
              fontSize="'h4'"
              color="rgba(100,197,200,0.8)"
              className="widget-content__grid__item"
              chartSize="0"
            />
          </div>
        </div>

        {/* {locationData[3]}, {locationData[4]} */}
      </div>
      <div className="widget-content__grid__item">
        <TitleAndContentCard
          title="Step Counter"
          content={dailySteps}
          height="145px"
          width="375px"
          color="#FFC107"
          fontSize="3.15em"
          chartSize="0"
          x
        />
      </div>
    </div>
  );
}
