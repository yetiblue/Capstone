import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activities, setActivities] = useState([]);

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
    // setTimeout(() => {
    fetch(callRefresh, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => getActivities(result.access_token));
  }, []);
  // }, 86400);

  // use current access token to call all activities
  function getActivities(access) {
    console.log("called");
    fetch(callActivities, { headers: { Authorization: `Bearer ${access}` } })
      .then((res) => res.json())
      .then(
        (data) => setActivities(data[5]),
        setIsLoading((prev) => !prev)
      )
      .catch((e) => console.log(e));
  }
  function showActivities() {
    if (isLoading) return <>LOADING</>;
    if (!isLoading) {
      console.log(activities);
      return (
        <div>
          <p>{activities.moving_time}</p>
          <p>{activities.distance}</p> {/* subtract from total */}
          <p>{activities.total_elevation_gain}</p>
          <p>{activities.start_latlng}</p>
          <p>{activities.average_cadence}</p> {/* times two */}
        </div>
      );
    }
  }

  return <div className="App">{showActivities()} </div>;
}

export default App;
