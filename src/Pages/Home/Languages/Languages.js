import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import ExCard from "./ExCard/ExCard";

const Languages = ({ arr }) => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom={true}
        align="center"
        sx={{ color: "secondary.main", mb: 15, fontSize: "3rem" }}
      >
        Languages
      </Typography>
      <Grid container spacing={8}>
        {arr.map((i, index) => (
          <Grid item xs={12} md={6} lg={3} marginTop={index % 2 !== 0 && 10}>
            <ExCard topic={i} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Languages;
