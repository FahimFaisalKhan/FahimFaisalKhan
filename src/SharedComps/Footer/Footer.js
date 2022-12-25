import React from "react";
import { Copyright, Instagram, Twitter } from "@mui/icons-material";

import { Box, Container, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Footer = () => {
  return (
    <Box>
      <Box
        component="footer"
        sx={{
          position: "relative",
          height: "30vh",
          py: 3,
          px: 2,
          mt: "auto",
          bgcolor: "black",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="body1"
            sx={{
              color: "white",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: ".5rem",
            }}
          >
            <Copyright /> All rights resved to Fahim Faisal Khan. 2022
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "2rem",
              mt: "1rem",
            }}
          >
            <Twitter
              onClick={(event) => {
                event.preventDefault();
                window.open("https://twitter.com/_Fahim_Faisal", "_blank");
              }}
              style={{ color: "white", fontSize: "2rem", cursor: "pointer" }}
            />
            <Instagram
              onClick={(event) => {
                event.preventDefault();
                window.open("https://www.instagram.com/rage.cave/", "_blank");
              }}
              sx={{ color: "white", fontSize: "2.3rem", cursor: "pointer" }}
            />
            <FacebookRoundedIcon
              onClick={(event) => {
                event.preventDefault();
                window.open("https://facebook.com/KhanFahimFaisal", "_blank");
              }}
              sx={{ color: "white", fontSize: "2.3rem", cursor: "pointer" }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
