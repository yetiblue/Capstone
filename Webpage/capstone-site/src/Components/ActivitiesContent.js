import * as React from "react";
import { useEffect, useState } from "react";
import TitleAndContentCard from "./TitleAndContentCard";
import LocationCard from "./LocationCard";
import { useSelector } from "react-redux";
import WeatherCard from "./WeatherCard";
import "./ActivitiesContent.css";
// import { AppBar } from "@mui/material";
// import { Toolbar } from "@mui/material";
// import { Typography } from "@mui/material";
import GeographyCard from "./GeographyCard";
import DayCard from "./DayCard";

// 25c7fee7d8e9c629fbb2fcb930882817

//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
export default function ActivitiesContent(props) {
  const [locationData, setLocationData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (props.data.length !== 0) {
      const endpoint = "mapbox.places";
      const longitude = props.data.start_latlng[1];
      const latitude = props.data.start_latlng[0];
      const getLocation = `https://api.mapbox.com/geocoding/v5/${endpoint}/${longitude},${latitude}.json?access_token=pk.eyJ1IjoieWV0aWJsdWUiLCJhIjoiY2xhdmxsOWVtMDZ5bzNwbzd2N3Y2bG1haiJ9.GXc7ecH3Jtp3YArh-6CLWQ`;
      const getWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=25c7fee7d8e9c629fbb2fcb930882817`;
      fetch(getLocation)
        .then((res) => res.json())
        .then((data) => setLocationData(data.features));
      fetch(getWeather)
        .then((res) => res.json())
        // .then((data) => console.log(data));
        .then((data) => setWeatherData(data));
      console.log(weatherData, "weathe");
    }
  }, [props.data.length]);

  const remainingMiles = useSelector((state) => state.totalDistance.testValue);
  const totalElevation = useSelector((state) => state.totalElevation.testValue);
  const dailySteps = useSelector((state) => state.totalSteps.testValue);
  const latlang = props.data.start_latlng;
  const todaysDistance = (props.data.distance / 1609).toFixed(2);
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
              title="Step Counter"
              content={dailySteps}
              height="165px"
              color="#FFC107"
              x
            />
          </div>
          <div className="widget-content__grid__item">
            <TitleAndContentCard
              title="Elevation Covered (ft)"
              content={totalElevation}
              height="195px"
              className="widget-content__grid__item"
              color="#FFB4AB"
            />
          </div>
        </div>
        <div className="widget-content__grid">
          <div className="widget-content__grid__item">
            <DayCard
              title="Day"
              content="70"
              height="200px"
              color="#FFC107"
              x
            />
          </div>

          <div className="widget-content__grid__item">
            {" "}
            <GeographyCard
              title="Geography"
              content={locationData}
              height="190px"
              x
            />
          </div>

          <div className="widget-content__grid__item">
            <TitleAndContentCard
              title="Miles to Finish"
              content={remainingMiles}
              height="150px"
              color="#D9EC7A"
              className="widget-content__grid__item"
            />
          </div>
          <div className="widget-content__grid__item">
            <TitleAndContentCard
              title="Today's Distance (mi)"
              content={todaysDistance}
              height="170px"
              color="rgba(100,197,200,0.8)"
              className="widget-content__grid__item"
            />
          </div>
        </div>

        {/* {locationData[3]}, {locationData[4]} */}
      </div>
    </div>
  );
}
