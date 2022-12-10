import { Grid, Typography } from "@mui/material";
import React from "react";
import ExCard from "./ExCard/ExCard";
const arr = [
  {
    language: "JavaScript/NodeJS",
    features: ["Frontend web-development", "Backend web-development"],
    description:
      "I am able to implement various functionalities in a website with JavaScript, Functionalities that allow users to interract with the website evemtually with the server and database. With the help of NodeJs I can build efficient servers for the website , servers that can communicate with the database like MongoDB.  ",
  },
  {
    language: "Python",
    features: [
      "Backend web-development",
      "Data analysis",
      "Data visualization",
      "Data management",
    ],
    description:
      "I can build efficient backend servers for web applications with diffrent python framworks with integrated database services like PostgreSQL , MySQL and manymore. Also data visualizing , turning unstructured data into structured data , cleaning and organizing data ,creating efficient ML models that can predict the possible outcome depending on existing data ; These are part of my expertise. ",
  },
  {
    language: "C/C++",
    features: ["Essentials"],

    description:
      "Flawless in basics and essentials of C and C++ in order to make most efficient use of the machine capability and capacity.",
  },
  {
    language: "HTML/CSS",
    features: ["Frontend web-development", "Styling", "Structuring"],
    description:
      "Though technically HTML and CSS are not programming languages , these are the very essence of web-development. I am able to implement any styling in your website  as you please with CSS. With HTML I can structure the website semantically for easy readability of other developers and even users. ",
  },
];
const Languages = () => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom={true}
        align="center"
        sx={{ color: "secondary.main", mb: 15 }}
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
