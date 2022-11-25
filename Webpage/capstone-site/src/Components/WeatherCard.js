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
    return (
      <Card
        variant="outlined"
        sx={{ height: 200, borderRadius: "16px", maxWidth: 260 }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {farenheitTemp} Degrees, {humidity} % ,{weatherConditions}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
