import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import borders from "@mui/material/Typography";

export default function WeatherCard(props) {
  if (props.content.length !== 0) {
    console.log(props.content.temp, "props");
    const farenheitTemp = Math.round(
      (props.content.main.temp - 273.15) * (9 / 5) + 32
    );
    const weatherConditions = props.content.weather[0].main;
    const humidity = props.content.main.humidity;
    const sunny = //clear also
      "linear-gradient(129deg, rgba(238,219,248,0.8) 0%, rgba(247,105,0,0.8) 100%)";
    const clouds =
      "linear-gradient(129deg, rgba(255,255,255,1) 0%, rgba(107,167,221,0.8) 100%)";
    const rain =
      "linear-gradient(129deg, rgba(255,255,255,0.8) 0%, rgba(54,85,113,0.8) 91%)";
    const snow =
      "linear-gradient(129deg, rgba(255,255,255,0.8) 0%, rgba(189,239,255,0.8) 91%)";

    let backgroundGradient;
    switch (weatherConditions) {
      case "Rain":
        backgroundGradient = rain;
        break;
      case "Mist":
        backgroundGradient = rain;
        break;
      case "Clouds":
        backgroundGradient = clouds;
        break;
      case "Snow":
        backgroundGradient = snow;
        break;
      case "Clear":
        backgroundGradient = sunny;
        break;
      default:
        break;
    }
    // ("rain, clear clouds, clear, sun");
    console.log(backgroundGradient);
    return (
      <Card
        variant="outlined"
        sx={{
          height: 390,
          borderRadius: "16px",
          background: backgroundGradient,
          maxWidth: 170,
          opacity: 0.8,
        }}
      >
        <CardContent>
          <Typography
            sx={{ paddingTop: 10 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {weatherConditions}
          </Typography>
          <Typography gutterBottom variant="h3" color="white" component="div">
            {farenheitTemp}°F
          </Typography>
          <Typography
            sx={{ marginTop: -2 }}
            gutterBottom
            variant="h3"
            color="white"
            component="div"
          >
            {humidity}%
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
