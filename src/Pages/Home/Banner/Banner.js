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
import React from "react";
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
    transform:translateX(-10rem);
  }
  to{
    opacity: 1;
    transform:translateX(0);
  }`;
  const moveinRight = keyframes`from{
    opacity : 0;
    transform:translateX(10rem);
  }
  to{
    opacity: 1;
    transform:translateX(0);
  }`;
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
            backgroundSize: "cover",
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
          py: 10,
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
              animation: `${moveinLeft} 2s linear`,
            }}
          >
            Hello
          </Typography>
          <Typography
            component="h2"
            variant="h3"
            sx={{
              fontWeight: 200,
              color: "info.light",
              textTransform: "capitalize",
              animation: `${moveinRight} 2s linear`,
            }}
          >
            I'm Fahim Faisal
          </Typography>
        </div>

        <ImageList
          cols={1}
          gap={20}
          sx={{ maxWidth: "100vw", overflow: "hidden" }}
        >
          <Zoom
            in={true}
            style={{ transitionDelay: "300ms", transitionDuration: "1s" }}
          >
            <Item sx={{ width: { sm: "27rem" } }}>
              <Box
                component="img"
                src={jsImage}
                alt=""
                loading="lazy"
                sx={{ maxWidth: "100vw" }}
              />
            </Item>
          </Zoom>
          <Zoom
            in={true}
            style={{ transitionDelay: "300ms", transitionDuration: "1s" }}
          >
            <Item sx={{ ml: { lg: 8 }, width: { sm: "27rem" } }}>
              <Box
                component="img"
                src={pythonImage}
                alt=""
                loading="lazy"
                sx={{ maxWidth: "100vw" }}
              />
            </Item>
          </Zoom>
        </ImageList>
      </Box>
    </MyBanner>
  );
};

export default Banner;
