import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import fahimscap from "../../../Static/Images/fahimscapture.png";
import bechakena from "../../../Static/Images/bechakena.png";
import binarynase from "../../../Static/Images/binarybase.png";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Fahim's Capture",
    image: fahimscap,
    description:
      "A photographer's personal website where he offers various photography services to his clients",
    technologies: [
      "MongoDB",
      "React.js",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "JWT",
    ],
    liveSite: "https://review-site-auth.web.app/",
    clientCode: "https://github.com/FahimFaisalKhan/Photographer_Site_MERN",
    serverCode:
      "https://github.com/FahimFaisalKhan/Photographer_Site_MERN-_server",
  },
  {
    name: "Binary Base",
    image: binarynase,
    description:
      "This is an online learning platform where people can see an overview of the courseand buy them.",
    technologies: [
      "MongoDB",
      "React.js",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
      "Daisy UI",
    ],
    liveSite: "https://learning-platform-auth.web.app/",
    clientCode:
      "https://github.com/FahimFaisalKhan/Online-Learning-Platform-MERN",
    serverCode:
      "https://github.com/FahimFaisalKhan/Online-Learning-Platform-Server",
  },
  {
    name: "Becha-Kena",
    image: bechakena,
    description:
      "This is a multi-vendor website of second-hand musical instruments with an integrated admin panel. Here users can sell their products and buy them as well.",
    technologies: [
      "MongoDB",
      "React.js",
      "Express.js",
      "Node.js",
      "Stripe Payment",
      "Tanstack Query",
      "React Dropzone",
      "Firebase admin SDK",
      "Tailwind CSS",
      "Firebase",
    ],
    liveSite: "https://bechakena-auth.web.app/",
    clientCode:
      "https://github.com/FahimFaisalKhan/Second-hand-product-MERN-Stripe",
    serverCode:
      "https://github.com/FahimFaisalKhan/Second-hand-product-MERN-Strip-server",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.extraLight,
  ...theme.typography.body2,

  display: "flex",

  justifyContent: "space-between",
  padding: "0 auto",
  borderRadius: "8px",

  //   justifyContent: "space-between",
}));
const Projects = () => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom={true}
        align="center"
        sx={{ color: "secondary.main", mb: 15 }}
      >
        Projects
      </Typography>
      <Stack spacing={12}>
        {projects.map((project, index) => (
          <Item
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                width: { sx: "100%", md: "30%" },
              }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    mt: 4,
                    mb: 2,
                    color: "secondary.main",
                    fontSize: "1.8rem",
                  }}
                  variant="h6"
                  component="div"
                >
                  Technologies
                </Typography>
                <Box>
                  <List dense={true}>
                    {project.technologies.map((t) => (
                      <ListItem sx={{ pl: 0.5 }}>
                        <ListItemText
                          primary={`♦ ${t}`}
                          sx={{ color: "grey.A100" }}
                          //   secondary={secondary ? "Secondary text" : null}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>

            <ProjectCard projectData={project} />
          </Item>
        ))}
      </Stack>
    </div>
  );
};

export default Projects;
