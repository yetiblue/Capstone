import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import borders from "@mui/material/Typography";

export default function WidgetCard() {
  return (
    <Card variant="outlined" sx={{ borderRadius: "16px", maxWidth: 160 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Step Count
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
