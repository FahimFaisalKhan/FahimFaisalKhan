import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Paper } from "@mui/material";
import { keyframes } from "@emotion/react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ProjectC({ project, id }) {
  const scrollable = React.useRef(null);

  const anm = keyframes`
  
  0%{
    background-position: top ;
  }
  50%{
    background-position: bottom;
  }
  100%{
    background-position:top;
  }
  `;

  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          position: "relative",
          zIndex: 200,
          maxWidth: "24rem",
          borderRadius: "10px",
          transition: "all .3s",
          "&:hover": {
            transform: "scale(1.1)",
          },

          "&:hover .cardImage": {
            opacity: 0.5,
            animationPlayState: "paused",
          },
          "&:hover .cardText": {
            transform: "translateX(0)",
          },
        }}
      >
        <CardContent
          className="cardImage"
          sx={{
            height: { xs: "20rem", sm: "22rem", lg: "30rem" },
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            animation: `${anm} 30s infinite ease-in-out`,
          }}
          ref={scrollable}
        ></CardContent>

        <CardContent
          className="cardText"
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { xs: 0, lg: "10%" },
            right: 0,
            width: { sx: "100%", md: "60%" },
            height: { sx: "70%", lg: "25%" },

            bgcolor: "rgb(0, 7, 45,.9)",
            transform: { md: "translateX(100%)" },
            transition: "all .2s",
            borderTopLeftRadius: { lg: "10px" },
            borderBottomLeftRadius: { lg: "10px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              mb: 1,
              fontSize: "1.5rem",

              color: "info.light",
            }}
            variant="h6"
            component="div"
          >
            {project.name}
          </Typography>
        </CardContent>
        <CardContent
          className="cardText"
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { xs: 0, lg: "50%" },
            left: 0,
            width: { sx: "100%", md: "80%" },
            height: { sx: "70%", lg: "40%" },

            bgcolor: "rgb(0, 7, 45,.9)",
            transform: { md: "translateX(-100%)" },
            transition: "all .2s",
            borderTopRightRadius: { lg: "10px" },
            borderBottomRightRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              mb: 1,
              fontSize: "1.3rem",
              borderBottom: (theme) => `2px solid ${theme.palette.info.light}`,
              color: "info.light",
            }}
            variant="h6"
            component="div"
          >
            Technologies
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap ", columnGap: ".7rem" }}>
            {project.technologies.map((tech) => (
              <Typography sx={{ color: "white" }} component={"p"}>
                ♦ {tech}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
