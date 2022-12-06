import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import borders from "@mui/material/Typography";
import { DonutChart } from "react-circle-chart";

export default function WidgetCard(props) {
  const percentage = Math.round((props.content * 100) / 3078);
  const items = [
    {
      value: percentage,
      label: "Distance covered",
    },
  ];
  return (
    <Card
      variant="outlined"
      sx={{
        height: props.height,
        borderRadius: "16px",
        backgroundColor: props.color,
        maxWidth: props.width,
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
        <Typography
          variant="h4"
          sx={{ fontSize: props.fontSize }}
          color="text.secondary"
        >
          {props.content}
          <DonutChart
            size={props.chartSize}
            showTotal="false"
            trackColor="#FFC107"
            items={items}
          />
        </Typography>
      </CardContent>
    </Card>
  );
}
