import { Box, keyframes, styled, Typography } from "@mui/material";

import bootstrap from "../../../Static/Images/bootstrap.png";
import daisyui from "../../../Static/Images/daisyUI.svg";
import firebase from "../../../Static/Images/firebase.svg";
import heroku from "../../../Static/Images/heroku.png";
import mongodb from "../../../Static/Images/mongodb.png";
import netlify from "../../../Static/Images/netlify.svg";
import npm from "../../../Static/Images/npm.png";
import tailwind from "../../../Static/Images/tailwind.png";
import tanstack from "../../../Static/Images/tanstack.png";
import postgresql from "../../../Static/Images/postgresql.png";
import mysql from "../../../Static/Images/mysql.png";
import scikit from "../../../Static/Images/scikitlearn.png";
import pandas from "../../../Static/Images/pandas.svg";
import vercel from "../../../Static/Images/vercel.svg";

import React from "react";
const spin = keyframes`
0%{
  transform : rotate(0deg)
}
100% {
transform: rotate(360deg) ;
}
`;
const TechContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  // border: "2px dotted #000000",
  borderRadius: "50%",
  width: "full",
  height: "50vh",
  animation: `${spin} 30s linear infinite`,
}));
const TechCircle = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "48%",
  top: "50%",

  borderRadius: "50%",
}));

const dob = [
  bootstrap,
  daisyui,
  firebase,
  heroku,
  mongodb,
  netlify,
  npm,
  tailwind,
  tanstack,
  postgresql,
  mysql,
  scikit,
  pandas,
  vercel,
];

const Technologies = () => {
  return (
    <div>
      <Typography
        component="h1"
        variant="p"
        gutterBottom={true}
        align="center"
        sx={{
          color: "secondary.main",
          mb: 15,
          fontWeight: 200,
          fontSize: "2.5rem",
        }}
      >
        Technologies
      </Typography>
      <TechContainer>
        {dob.map((d, i) => {
          const spin = keyframes`
         
          to {
    transform: rotate(-${i * 30}deg) ;
  }
`;
          return (
            <TechCircle
              sx={{
                transform: `rotate(${i * 25.7 + 25.7}deg) translateX(340px)`,
                // animation: `${spin} 5s infinite linear`,
              }}
            >
              <Box
                component={"img"}
                src={d}
                width="5rem"
                height="4rem"
                sx={{
                  transform: `rotate(-${i * 25.7 + 25.7}deg)`,
                  animation: `${keyframes`

                            to {
                      transform: rotate(-${382 + i * 25.7}deg ) ;
                    }
                  `} 30s linear infinite `,
                }}
              />
            </TechCircle>
          );
        })}
      </TechContainer>
    </div>
  );
};

export default Technologies;
