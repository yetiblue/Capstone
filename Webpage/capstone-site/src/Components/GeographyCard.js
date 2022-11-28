import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import desertBackground from "../Images/desert.jpg";
import caliBackground from "../Images/cali.jpg";
import appalachiaBackground from "../Images/appalachia.jpg";
import cornBackground from "../Images/corn.jpg";
import rockiesBackground from "../Images/rockies.jpg";

export default function GeographyCard(props) {
  let geographyImage;
  let stateGeography;
  if (props.content.length !== 0) {
    const stateName = props.content[4].text;
    switch (stateName) {
      case "New York":
        geographyImage = desertBackground;
        stateGeography = "Urban";
        break;
      case "California":
        geographyImage = caliBackground;
        stateGeography = "Desert";

        break;
      case "New Mexico":
        geographyImage = desertBackground;
        stateGeography = "Desert";

        break;
      case "Colorado":
        geographyImage = rockiesBackground;
        stateGeography = "Rocky Mountains";

        break;
      case "Kansas":
        geographyImage = cornBackground;
        stateGeography = "Cornfields";

        break;
      case "Utah":
        geographyImage = desertBackground;
        stateGeography = "Desert";

        break;
      case "Nevada":
        geographyImage = desertBackground;
        stateGeography = "Desert";

        break;
      case "Illinois":
        geographyImage = cornBackground;
        stateGeography = "Cornfields";

        break;
      case "Indiana":
        geographyImage = cornBackground;
        stateGeography = "Cornfields";

        break;
      case "Missouri":
        geographyImage = cornBackground;
        stateGeography = "Cornfields";

        break;
      case "Pennsylvania":
        geographyImage = appalachiaBackground;
        stateGeography = "Appalachians";

        break;
      default:
        break;
    }
  }

  return (
    <Card
      variant="outlined"
      sx={{
        height: props.height,
        borderRadius: "16px",
        backgroundColor: props.color,
        maxWidth: 170,
        fontWeight: "bold",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold", marginTop: 6 }}
          gutterBottom
          variant="h5"
        >
          {props.title}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          sx={{ fontWeight: "bold", marginTop: -4 }}
          gutterBottom
          variant="h5"
        >
          {stateGeography}
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
        height="200"
        image={geographyImage}
        sx={{
          opacity: 0.6,
          maxWidth: 350,
          borderRadius: "16px",
          position: "relative",
          marginTop: -20,
        }}
      />
    </Card>
  );
}
