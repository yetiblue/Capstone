import React, { useState, useEffect } from "react";
import ActivitiesContent from "./Components/ActivitiesContent";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activity, setActivities] = useState([]);

  //Strava Credentials
  let clientID = "94744";
  let clientSecret = "e110a49bbdb3afe30ee60663e753dffd08def288";

  // refresh token and call address
  const refreshToken = "9ce603aa05e98a1cadeeb245c981e1b4a00fe371";
  const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`;

  // endpoint for read-all activities. temporary token is added in getActivities()
  const callActivities = `https://www.strava.com/api/v3/athlete/activities`;

  // Use refresh token to get current access token
  useEffect(() => {
    console.log("use effect");
    fetch(callRefresh, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token));
  }, []);

  function getActivities(access) {
    console.log("called");
    fetch(callActivities, { headers: { Authorization: `Bearer ${access}` } })
      .then((res) => res.json())
      .then(
        (data) => setActivities(data[17]),
        setIsLoading((prev) => !prev)
      )
      .catch((e) => console.log(e));
  }
  function showActivities() {
    if (isLoading) return <>LOADING</>;
    if (!isLoading) {
      console.log(activity);
      let existingRuns = localStorage.getItem("StravaData");

      const activityContainer = [];
      if (!existingRuns && activity.length !== 0) {
        activityContainer.push(activity);
        localStorage.setItem("StravaData", JSON.stringify(activityContainer));
      } else if (existingRuns && activity.length !== 0) {
        const latestRun = JSON.parse(existingRuns).at(-1);
        if (latestRun.distance !== activity.distance) {
          const flatRuns = JSON.parse(existingRuns);
          console.log(flatRuns.flat(), "flat");

          activityContainer.push(JSON.parse(existingRuns));
          activityContainer.push(activity);
          localStorage.setItem(
            "StravaData",
            JSON.stringify(activityContainer.flat(100))
          );
        }
      }
    }
  }
  return (
    <div className="App">
      {showActivities()}
      <ActivitiesContent data={activity} height={100} />
    </div>
  );
}

export default App;
