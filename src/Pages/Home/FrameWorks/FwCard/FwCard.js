import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import "./FwCard.css";
import { height } from "@mui/system";

export default function FwCard({ fw }) {
  const { framework, description } = fw;
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: "info.light" }}>
          {framework}
        </Typography>
      </CardContent>
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
      <Box className="card-side card-side-back">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            width: "100%",
            height: "100%",
            mt: 5,
            px: 3,
            fontSize: "1.2rem",
          }}
        >
          <Typography variant="p" component={"p"} color="primary">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
