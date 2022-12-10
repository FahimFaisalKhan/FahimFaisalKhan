import React from "react";
import { Copyright } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";

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
          bgcolor: (theme) => theme.palette.info.main,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">Work on progress</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
