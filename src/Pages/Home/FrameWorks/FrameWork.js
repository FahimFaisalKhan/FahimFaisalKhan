import React from "react";
import { Grid, Typography } from "@mui/material";
import FwCard from "./FwCard/FwCard";

const frameworks = [
  {
    framework: "ReactJS",
    description:
      "ReactJS is a JavaScript library. I am experienced in building efficient projects with ReactJs with various convenient npm packages. Projects I have bult with ReactJS are user friendly and gives user a nice experience which makes them come back again. ",
  },

  {
    framework: "ExpressJS",
    description:
      "I am well versed in ExpressJS, which is a nodeJs framework. With help of expressJs I can buld fast and efficient servers to make the UE smooth. I am also experienced in integrating MongoDB data-base service with expressJs to store and manipulate essential data.",
  },
  {
    framework: "Flask & Django",
    description:
      "Flask & Django are two most popular python frameworks for development of secure and maintainable websites. I can build well ordered backend web-servers with Flask as well as Django with integrated database service like MySQL and PostgreSQL.",
  },

  {
    framework: "CSS Frameworks",
    description:
      "I am well versed in 3 most popular CSS frameworks <br /> Bootstrap <br /> Matterial-UI <br />Tailwind css <br /> I can build full responsive designs with smooth user experience.",
  },
];

const FrameWork = () => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom={true}
        align="center"
        sx={{ color: "secondary.main", mb: 15 }}
      >
        Libraries & Frameworks
      </Typography>
      <Grid container spacing={8}>
        {frameworks.map((fw, index) => (
          <Grid key={index} item xs={3}>
            <FwCard fw={fw} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FrameWork;
