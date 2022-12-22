import { Grid, Typography } from "@mui/material";
import React from "react";

import ProjectC from "./ProjectC";

const Projects = ({ projects }) => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom={true}
        align="center"
        sx={{ color: "secondary.main", mb: 15 }}
      >
        Projects
      </Typography>

      <Grid
        container
        rowSpacing={{ xs: 6, lg: 12 }}
        columnSpacing={{ xs: 6, lg: 12 }}
        sx={{ px: { sm: 5 }, justifyContent: "center" }}
      >
        {projects.map((project, index) => (
          <Grid item xs={10} sm={6} md={4}>
            <ProjectC project={project} id={index} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
