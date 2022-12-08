import {
  Paper,
  styled,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Stack,
  Fade,
} from "@mui/material";

import jsImage from "../../../Static/Images/js.png";

import pythonImage from "../../../Static/Images/python.png";

// import { Box } from "@mui/system";
import React from "react";
import me from "../../../Static/Images/me.png";
import { color, fontSize, height, positions } from "@mui/system";
import { fontGrid } from "@mui/material/styles/cssUtils";

const MyBanner = styled(Box)(
  (props) =>
    `
    
    display: flex;
    align-items:center;

`
);
const Item = styled(ImageListItem)(
  ({ theme }) => `
  background :radial-gradient(ellipse at left bottom, ${theme.palette.primary.main} 0%,${theme.palette.primary.main} 20%, ${theme.palette.primary.light} 70%,  ${theme.palette.primary.main}  100%);

  width: 27rem;
  position:relative;
  
  border: 2px solid  ${theme.palette.primary.extraLight};
  border-radius:5px;


  

 

`
);

const Banner = () => {
  return (
    <MyBanner>
      <Box
        sx={{
          width: "44%",
          height: "80vh",
        }}
      >
        <Paper
          component={"div"}
          sx={{
            bgcolor: "transparent",

            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,29,61,1) 80%) , url(${me})`,
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
            }}
          >
            I'm Fahim Faisal
          </Typography>
        </div>

        <ImageList cols={1} gap={20}>
          <Item
            sx={{
              "&:hover::after": {
                display: "flex",
                opacity: 1,
                top: 0,
              },

              "&::after": {
                content: "'kopa'",
                height: "100%",
                width: "100%",
                position: "absolute",
                background:
                  "radial-gradient(ellipse at left bottom, #001d3d 0%,#001d3d 20%, #003566 70%,  #001d3d  100%)",
                top: "10rem",
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem",
                color: "primary.main",
                opacity: 0,
                transition: "all 3s",
              },
            }}
          >
            <Box component="img" src={jsImage} alt="" loading="lazy" />
          </Item>

          <Item sx={{ ml: 8 }}>
            <Box component="img" src={pythonImage} alt="" loading="lazy" />
          </Item>
        </ImageList>
      </Box>
    </MyBanner>
  );
};

export default Banner;
