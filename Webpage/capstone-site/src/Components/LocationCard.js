import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import borders from "@mui/material/Typography";

export default function LocationCard(props) {
  if (props.content.length !== 0) {
    console.log(props.content.length, "props");
    return (
      <Card
        variant="outlined"
        sx={{ height: 200, borderRadius: "16px", maxWidth: 260 }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {props.coords}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content[3].text}, {props.content[4].text}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
