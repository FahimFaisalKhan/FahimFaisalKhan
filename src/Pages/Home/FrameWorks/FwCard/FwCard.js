import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import "./FwCard.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function FwCard({ fw }) {
  const { framework, description } = fw;
  const card = (
    <React.Fragment>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div" sx={{ color: "info.light" }}>
          {/* be{bull}nev{bull}o{bull}lent */}
          {framework}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </React.Fragment>
  );
  return (
    <Box
      component={"div"}
      className="card"
      variant="outlined"
      bgcolor={"transparent"}
      data-aos="flip-right"
      data-aos-duration="500"
      data-aos-delay="50"
      data-aos-easing="ease-in-out"
    >
      <Box className="card-side card-side-front">{card}</Box>
      <Box className="card-side card-side-back">Back side</Box>
    </Box>
  );
}
