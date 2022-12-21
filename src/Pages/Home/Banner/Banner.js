import {
  Paper,
  styled,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Fade,
  Zoom,
  Button,
} from "@mui/material";

import jsImage from "../../../Static/Images/js.png";

import pythonImage from "../../../Static/Images/python.png";

// import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import me from "../../../Static/Images/me.png";
import { color, fontSize, height, keyframes, positions } from "@mui/system";
import { fontGrid } from "@mui/material/styles/cssUtils";

const MyBanner = styled(Box)(
  ({ theme }) =>
    `

    
    display: flex;
  
    
    align-items:center;

`
);
const Item = styled(ImageListItem)(
  ({ theme }) => `
  background :radial-gradient(ellipse at left bottom, ${theme.palette.primary.main} 0%,${theme.palette.primary.main} 20%, ${theme.palette.primary.light} 70%,  ${theme.palette.primary.main}  100%);

  
  position:relative;
  
  border: 2px solid  ${theme.palette.primary.extraLight};
  border-radius:5px;
  


  

 

`
);

const Banner = () => {
  const moveinLeft = keyframes`from{
    opacity : 0;
    transform:translateX(-8rem);
  }
  to{
    opacity: 1;
    transform:translateX(0);
  }`;
  const moveinRight = keyframes`from{
    opacity : 0;
    transform:translateX(8rem);
  }
  to{
    opacity: 1;
    transform:translateX(0);
  }`;
  const moveinUp = keyframes`0%{
    content:"Full-Stack Web Developer";
    opacity : 0;
    transform:translateY(8rem);
  }
  27.5%{
    content:"Full-Stack Web Developer";
    transform:translateY(0);
    opacity: 1;
   

  }
  30%{
    content:"Full-Stack Web Developer";
    transform:translateY(0);
    opacity: 1;
   

  }
  33%{
    content:"Full-Stack Web Developer";
    transform:translateX(2rem);
    opacity: 0;
    
  }
 
  34%{
    content:"Front-end Web Developer";
    opacity : 0;
    transform:translateY(8rem);
  }
  61.5%{
    content:"Front-end Web Developer";
  
    transform:translateY(0);
    opacity: 1;

  }
  63%{
    content:"Front-end Web Developer";
  
    transform:translateY(0);
    opacity: 1;

  }
  66%{
    content:"Front-end Web Developer";
   
    transform:translateX(2rem);
    opacity: 0;
  }
  67%{
    content:"Back-end Web Developer";
  
    transform:translateY(8rem);
    opacity : 0;
  }
  93.5%{
    content:"Back-end Web Developer";
   
    transform:translateY(0);
    opacity: 1;

  }
  96%{
    content:"Back-end Web Developer";
   
    transform:translateY(0);
    opacity: 1;

  }
  100%{
    content:"Back-end Web Developer";
 
    transform:translateX(2rem);
    opacity: 0;
  }
  
  `;

  return (
    <MyBanner sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          width: { xs: "100%", md: "44%" },
          height: "80vh",
        }}
      >
        <Paper
          component={"div"}
          sx={{
            bgcolor: "transparent",

            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, #00072d 80%) , url(${me})`,
            boxShadow: 0,
            backgroundSize: { xs: "cover" },
            backgroundRepeat: "no-repeat",
            backgroundPosition: { xs: "left", sm: "top", md: "center" },
            height: "100%",
          }}
          width="100%"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "5rem",
          py: { md: 10 },
        }}
      >
        <div>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontWeight: 700,
              color: "secondary.main",
              textTransform: "capitalize",
              pl: 1,
              animation: `${moveinLeft} 2s linear`,
            }}
          >
            Hello!
          </Typography>
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 200,
              color: "info.light",
              pl: 1,
              textTransform: "capitalize",
              animation: `${moveinRight} 2s linear`,
            }}
          >
            I'm Fahim Faisal
          </Typography>
          <Typography
            component="h2"
            variant="h6"
            sx={{
              fontWeight: 200,
              color: "info.light",
              textTransform: "capitalize",

              mt: 1,
              pl: 1,
              height: "8rem",

              "&::after": {
                content: "''",
                opacity: 0,
                height: "100%",
                position: "absolute",
                animation: `${moveinUp} 10s infinite ease-in-out`,
              },
            }}
          ></Typography>
        </div>

        <ImageList
          cols={1}
          gap={20}
          sx={{ maxWidth: { md: "90vw" }, overflow: "hidden", px: 1 }}
        >
          <Zoom
            in={true}
            style={{ transitionDelay: "300ms", transitionDuration: "1s" }}
          >
            <Item sx={{ width: { sm: "25rem" } }}>
              <Box
                component="img"
                src={jsImage}
                alt=""
                loading="lazy"
                sx={{ width: "100%" }}
              />
            </Item>
          </Zoom>
          <Zoom
            in={true}
            style={{ transitionDelay: "300ms", transitionDuration: "1s" }}
          >
            <Item sx={{ ml: { lg: 8 }, width: { sm: "25rem" } }}>
              <Box
                component="img"
                src={pythonImage}
                alt=""
                loading="lazy"
                sx={{ width: "100%" }}
              />
            </Item>
          </Zoom>
        </ImageList>
      </Box>
    </MyBanner>
  );
};

export default Banner;
