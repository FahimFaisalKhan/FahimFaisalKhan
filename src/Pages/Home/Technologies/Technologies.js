import { Box, keyframes, styled, Typography } from "@mui/material";

import bootstrap from "../../../Static/Images/bootstrap.svg";
import daisyui from "../../../Static/Images/daisyUI.svg";
import firebase from "../../../Static/Images/firebase.svg";
import heroku from "../../../Static/Images/heroku.svg";
import mongodb from "../../../Static/Images/mongodb.svg";
import netlify from "../../../Static/Images/netlify.svg";
import npm from "../../../Static/Images/npm.svg";
import tailwind from "../../../Static/Images/tailwind.svg";
import tanstack from "../../../Static/Images/tanstack.png";
import postgresql from "../../../Static/Images/postgresql.svg";
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
  width: "100vh",
  height: "100vh",
  margin: "0 auto",

  background: "radial-gradient(#00072d , #001c55  , #00072d )",
  animation: `${spin} 90s linear infinite`,
}));
const TechCircle = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "45.8%",
  top: "45.8%",

  borderRadius: "50%",
}));

const dob = [
  bootstrap,
  daisyui,
  firebase,
  postgresql,
  mongodb,
  netlify,
  vercel,
  tailwind,
  tanstack,
  heroku,
  mysql,
  scikit,
  pandas,
  npm,
];

const Technologies = () => {
  return (
    <div style={{ position: "relative" }}>
      <Typography
        component="h1"
        variant="p"
        gutterBottom={true}
        align="center"
        sx={{
          fontWeight: 200,
          fontSize: "1.7rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "15rem",
          height: "15rem",
          textAlign: "left",
          borderRadius: "50%",
          zIndex: 50,
          color: "info.main",
          border: "1px solid #001c55",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component={"p"} sx={{ ml: 3.5 }}>
          Technologies I feel comfortable to work with
        </Box>
      </Typography>
      <TechContainer>
        {dob.map((d, i) => {
          return (
            <TechCircle
              sx={{
                transform: `rotate(${i * 25.5 + 25.5}deg) translateX(380px)`,
                // animation: `${spin} 5s infinite linear`,
              }}
            >
              <Box
                component={"img"}
                src={d}
                width="5.5rem"
                height="5rem"
                sx={{
                  borderRadius: "20%",
                  transform: `rotate(-${i * 25.5 + 25.5}deg)`,
                  animation: `${keyframes`

                            to {
                      transform: rotate(-${383 + i * 25.5}deg ) ;
                    }
                  `} 90s linear infinite `,
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
