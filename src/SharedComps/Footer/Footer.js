import React from "react";
import { Copyright, Facebook, WhatsApp } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { BsMessenger } from "react-icons/bs";

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
            <BsMessenger
              onClick={(event) => {
                event.preventDefault();
                window.open("http://m.me/KhanFahimFaisal", "_blank");
              }}
              color="white"
              style={{ fontSize: "2rem", cursor: "pointer" }}
            />
            <WhatsApp
              onClick={(event) => {
                event.preventDefault();
                window.open("https://wa.me/8801871461409?text=", "_blank");
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
