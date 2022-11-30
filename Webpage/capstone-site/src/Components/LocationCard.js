import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import borders from "@mui/material/Typography";
import nycBackground from "../Images/nyc.jpg";
import kansasBackground from "../Images/kansas.jpg";
import coloradoBackground from "../Images/colorado.jpg";
import nmBackground from "../Images/newmexico.jpg";
import caliBackground from "../Images/California.jpg";
import utahBackground from "../Images/utah.jpg";
import nevadaBackground from "../Images/Nevada.jpg";
import illinoisBackground from "../Images/illinois.jpg";
import indianaBackground from "../Images/Indiana.jpg";
import missouriBackground from "../Images/missouri.jpg";

import "./LocationCard.css";

export default function LocationCard(props) {
  if (props.content.length !== 0) {
    const stateName = props.content[4].text;
    let backgroundImage;
    switch (stateName) {
      case "New York":
        backgroundImage = nycBackground;
        break;
      case "California":
        backgroundImage = caliBackground;
        break;
      case "New Mexico":
        backgroundImage = nmBackground;
        break;
      case "Colorado":
        backgroundImage = coloradoBackground;
        break;
      case "Kansas":
        backgroundImage = kansasBackground;
        break;
      case "Utah":
        backgroundImage = utahBackground;
        break;
      case "Nevada":
        backgroundImage = nevadaBackground;
        break;
      case "Illinois":
        backgroundImage = illinoisBackground;
        break;
      case "Indiana":
        backgroundImage = indianaBackground;
        break;
      case "Missouri":
        backgroundImage = missouriBackground;
        break;

      default:
        break;
    }

    return (
      <Card
        className="weather-card"
        variant="outlined"
        sx={{
          height: 200,
          borderRadius: "16px",
          maxWidth: 355,
        }}
      >
        <CardContent>
          <div className="location-wrapper">
            <div className="location-wrapper__title">
              <Typography
                gutterBottom
                variant="h4"
                sx={{ marginTop: -1 }}
                component="div"
              >
                {props.title}
              </Typography>
            </div>
            <div className="location-wrapper__content">
              <Typography
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  marginTop: -1,
                  maxWidth: 140,
                }}
                variant="h6"
                color="text.secondary"
              >
                {props.content[3].text}, {stateName}
              </Typography>
              <Typography
                sx={{ maxWidth: 140 }}
                gutterBottom
                variant="body2"
                component="div"
              >
                {props.coords}
              </Typography>
            </div>
          </div>
        </CardContent>
        <CardMedia
          className="card-media"
          component="img"
          height="200"
          image={backgroundImage}
          sx={{
            opacity: 0.25,
            position: "absolute",
            top: 0,
            maxWidth: 330,
            borderRadius: "16px",
          }}
        />
      </Card>
    );
  }
}
