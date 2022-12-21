import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import FwCard from "./FwCard/FwCard";
import { Margin } from "@mui/icons-material";
import { useFetch } from "../../../hooks/useFetch";

const FrameWork = () => {
  const { data: frameworks } = useFetch("frameworks.json");
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom={true}
        align="center"
        sx={{ color: "secondary.main", mb: 15, fontSize: "3rem" }}
      >
        Libraries & Frameworks
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 6, lg: 12 }}
        columnSpacing={{ xs: 6, lg: 12 }}
        sx={{ px: { sm: 5 }, justifyContent: "center" }}
      >
        {frameworks.map((fw, index) => (
          <Grid key={index} item xs={12} sm={6} lg={3}>
            <FwCard fw={fw} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FrameWork;
