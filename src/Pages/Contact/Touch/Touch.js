import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./touch.css";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Touch = () => {
  return (
    <Box sx={{ my: 12, maxWidth: "1280px", mx: "auto" }}>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          color: "secondary.main",
          textAlign: "center",
          mb: 8,
          fontSize: "1.8rem",
        }}
      >
        Get in touch
      </Typography>
      <Grid container spacing={8}>
        <Grid item xs={12} md={3}>
          <Link href="tel:+8801871461409" style={{ textDecoration: "none" }}>
            <Paper
              className="stop-shake"
              sx={{
                display: "flex",
                justifyContent: "center",
                rowGap: 1,
                alignItems: "center",
                background:
                  "radial-gradient( 50% 50% at center center ,  #03a9f4 0%, #00072d 100%)",
                "&:hover": {
                  transform: "scale(1.06)",
                  background:
                    "radial-gradient( 50% 50% at center center , #00072d 0%,#00072d 96% ,#03a9f4 97%, #03a9f4 98%,#00072d 99%)",
                },
                "&:hover .icon": {
                  color: "info.light",
                },
                "&:hover .info": {
                  color: "info.light",
                },
                transition: "all .3s ease-in-out",
                cursor: "pointer",
                backfaceVisibility: "hidden",
                flexDirection: "column",
                boxShadow: "none",
                minHeight: "13rem",
              }}
            >
              <LocalPhoneIcon
                className="icon"
                sx={{
                  color: "primary.light",
                  transition: "all .3s ease-in-out",
                }}
              />
              <Typography
                className="info"
                component={"p"}
                sx={{
                  fontSize: ".78rem",
                  fontWeight: 600,
                  color: "primary.main",
                  transition: "all .3s ease-in-out",
                }}
              >
                +8801871461409
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link
            href="mailto:khanfahimfaisal@gmail.com"
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            <Paper
              className="stop-shake"
              sx={{
                display: "flex",
                justifyContent: "center",
                rowGap: 1,
                alignItems: "center",
                background:
                  "radial-gradient( 50% 50% at center center ,  #03a9f4 0%, #00072d 100%)",
                "&:hover": {
                  transform: "scale(1.06)",
                  background:
                    "radial-gradient( 50% 50% at center center , #00072d 0%,#00072d 96% ,#03a9f4 97%, #03a9f4 98%,#00072d 99%)",
                },
                "&:hover .icon": {
                  color: "info.light",
                },
                "&:hover .info": {
                  color: "info.light",
                },
                transition: "all .3s ease-in-out",
                cursor: "pointer",
                backfaceVisibility: "hidden",
                flexDirection: "column",
                boxShadow: "none",
                minHeight: "13rem",
              }}
            >
              <EmailIcon
                className="icon"
                sx={{
                  color: "primary.light",
                  transition: "all .3s ease-in-out",
                }}
              />
              <Typography
                className="info"
                component={"p"}
                sx={{
                  fontSize: ".78rem",
                  fontWeight: 600,
                  color: "primary.main",
                  transition: "all .3s ease-in-out",
                }}
              >
                KhanFahimFaisal@gmail.com
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.facebook.com/KhanFahimFaisal",

                "_blank"
              );
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper
              className="stop-shake"
              sx={{
                display: "flex",
                justifyContent: "center",
                rowGap: 1,
                alignItems: "center",
                background:
                  "radial-gradient( 50% 50% at center center ,  #03a9f4 0%, #00072d 100%)",
                "&:hover": {
                  transform: "scale(1.06)",
                  background:
                    "radial-gradient( 50% 50% at center center , #00072d 0%,#00072d 96% ,#03a9f4 97%, #03a9f4 98%,#00072d 99%)",
                },
                "&:hover .icon": {
                  color: "info.light",
                },
                "&:hover .info": {
                  color: "info.light",
                },
                transition: "all .3s ease-in-out",
                cursor: "pointer",
                backfaceVisibility: "hidden",
                flexDirection: "column",
                boxShadow: "none",
                minHeight: "13rem",
              }}
            >
              <FacebookIcon
                className="icon"
                sx={{
                  color: "primary.light",
                  transition: "all .3s ease-in-out",
                }}
              />
              <Typography
                className="info"
                component={"p"}
                sx={{
                  fontSize: ".78rem",
                  fontWeight: 600,
                  color: "primary.main",
                  transition: "all .3s ease-in-out",
                }}
              >
                facebook.com/KhanFahimFaisal
              </Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.linkedin.com/in/fahim-faisal-khan",

                "_blank"
              );
            }}
            style={{ textDecoration: "none" }}
          >
            <Paper
              className="stop-shake"
              sx={{
                display: "flex",
                justifyContent: "center",
                rowGap: 1,
                alignItems: "center",
                background:
                  "radial-gradient( 50% 50% at center center ,  #03a9f4 0%, #00072d 100%)",
                "&:hover": {
                  transform: "scale(1.06)",
                  background:
                    "radial-gradient( 50% 50% at center center , #00072d 0%,#00072d 96% ,#03a9f4 97%, #03a9f4 98%,#00072d 99%)",
                },
                "&:hover .icon": {
                  color: "info.light",
                },
                "&:hover .info": {
                  color: "info.light",
                },
                transition: "all .3s ease-in-out",
                cursor: "pointer",
                backfaceVisibility: "hidden",
                flexDirection: "column",
                boxShadow: "none",
                minHeight: "13rem",
              }}
            >
              <LinkedInIcon
                className="icon"
                sx={{
                  color: "primary.light",
                  transition: "all .3s ease-in-out",
                }}
              />
              <Typography
                className="info"
                component={"p"}
                sx={{
                  fontSize: ".78rem",
                  fontWeight: 600,
                  color: "primary.main",
                  transition: "all .3s ease-in-out",
                }}
              >
                linkedin.com/in/fahim-faisal-khan
              </Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Touch;
