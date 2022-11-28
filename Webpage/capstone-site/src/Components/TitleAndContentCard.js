import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import borders from "@mui/material/Typography";

export default function WidgetCard(props) {
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
          sx={{ fontWeight: "bold" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
