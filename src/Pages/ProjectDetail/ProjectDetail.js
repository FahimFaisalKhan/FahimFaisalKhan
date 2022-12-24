import { Height } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useFetch } from "../../hooks/useFetch";
import { MyLoader } from "../../contexts/LoaderContext";
import IconLoader from "../../SharedComps/Loader/IconLoader";

const ProjectDetail = () => {
  const { id } = useParams();
  const [projectsLoading, setProjectsLoading] = useState(true);
  const { data } = useFetch("projects.json", setProjectsLoading);
  const { setLoading } = useContext(MyLoader);
  const location = useLocation();

  const project = data[+id];

  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  useEffect(() => {
    if (projectsLoading || !project) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    return () => setLoading(true);
  }, [setLoading]);
  if (projectsLoading || !project) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component={"div"}
          variant="h2"
          fontSize={"2rem"}
          width="10rem"
        >
          <IconLoader />
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 10, mt: 1.4 }}>
      <Paper
        sx={{
          backgroundImage: `linear-gradient(to right , rgb(0, 7, 45),rgb(0, 7, 45,.5) 8%, rgb(0, 28, 85,0.0)), url(${project.imageHeader})`,
          backgroundSize: { xs: "contain", md: "80%" },

          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          minHeight: {
            xs:
              +project.id === 0 ? "80vh" : +project.id === 1 ? "85vh" : "104vh",
            sm:
              +project.id === 0
                ? "100vh"
                : +project.id === 1
                ? "120vh"
                : "125vh",
            md: "80vh",
          },
          boxShadow: "none",
          bgcolor: "primary.main",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: { xs: "end", md: "start", lg: "center" },
          color: "grey.A100",
          fontSize: { xs: "1.5rem", lg: "1.7rem" },
          pt: { xs: "auto", md: 5, lg: "auto" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "20%" },

            ml: { md: 4 },
            borderLeft: "2px solid white",
            paddingLeft: "1rem",
            // borderLeftStyle: "dashed",
            borderWidth: ".23rem",
          }}
        >
          {project.description}
        </Box>
        <Box
          container
          spacing={0}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: 1,
            rowGap: 1,
            width: { xs: "100%", sm: "40%", md: "20%" },
            ml: { sm: 4, md: 5 },
            justifyContent: { xs: "center", sm: "left" },
            mt: 5,
          }}
        >
          <Button
            onClick={(event) => {
              event.preventDefault();
              window.open(project.liveSite, "_blank");
            }}
            sx={{ textTransform: "capitalize" }}
            color="secondary"
            variant="outlined"
            endIcon={<OpenInNewIcon />}
          >
            Live Site
          </Button>

          <Button
            onClick={(event) => {
              event.preventDefault();
              window.open(project.clientCode, "_blank");
            }}
            sx={{ textTransform: "capitalize" }}
            color="secondary"
            variant="outlined"
            endIcon={<OpenInNewIcon />}
          >
            Client Side Code
          </Button>

          <Button
            onClick={(event) => {
              event.preventDefault();
              window.open(project.serverCode, "_blank");
            }}
            sx={{ textTransform: "capitalize" }}
            color="secondary"
            variant="outlined"
            endIcon={<OpenInNewIcon />}
          >
            Server Side Code
          </Button>
        </Box>
      </Paper>
      <Stack
        spacing={30}
        sx={{
          maxWidth: "1550px",
          margin: "5rem auto",
          px: { xs: 4, md: "auto" },
        }}
      >
        {project.features.map((feature, index) => (
          <Box
            sx={{
              display: "flex",
              columnGap: "2rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", md: "50%" },
                flexDirection: "column",
                rowGap: "2rem",
                justifyContent: "center",
              }}
            >
              {feature.images.map((image, index) => (
                <Paper
                  component={"img"}
                  src={image}
                  sx={{ width: { xs: "100%", md: "100%" } }}
                />
              ))}
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: ".5rem",
                  justifyContent: "space-around",
                  height: "100%",
                }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Typography
                    sx={{
                      mt: 4,
                      mb: 2,
                      fontSize: "1.8rem",
                      borderBottom: (theme) =>
                        `2px solid ${theme.palette.secondary.main}`,
                      lineHeight: ".1em",
                    }}
                    variant="h6"
                    component="div"
                  >
                    <Paper
                      component={"span"}
                      sx={{
                        bgcolor: "primary.main",
                        color: "secondary.main",
                        boxShadow: "none",
                        pr: 3,
                      }}
                    >
                      {feature.name}
                    </Paper>
                  </Typography>
                  <Box component={"p"} sx={{ color: "info.light" }}>
                    {feature.caption}
                  </Box>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Typography
                    sx={{
                      mt: 4,
                      mb: 2,
                      fontSize: "1.8rem",
                      borderBottom: (theme) =>
                        `2px solid ${theme.palette.secondary.main}`,
                      lineHeight: ".1em",
                    }}
                    variant="h6"
                    component="div"
                  >
                    <Paper
                      component={"span"}
                      sx={{
                        bgcolor: "primary.main",
                        color: "secondary.main",
                        boxShadow: "none",
                        pr: 3,
                      }}
                    >
                      Technologies
                    </Paper>
                  </Typography>
                  <List
                    sx={{
                      width: "100%",

                      color: "info.light",
                      display: "flex",
                      flexWrap: "wrap",
                      columnGap: "1.5rem",
                    }}
                  >
                    {feature.featureTechs.map((value, i) => (
                      <ListItem key={i} disableGutters sx={{ width: "auto" }}>
                        <>
                          <Divider
                            orientation="vertical"
                            flexItem
                            light={true}
                            sx={{ mr: 2 }}
                          >
                            ||
                          </Divider>
                          <ListItemText primary={value} />
                        </>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Typography
                    sx={{
                      mt: 4,
                      mb: 2,
                      fontSize: "1.8rem",
                      borderBottom: (theme) =>
                        `2px solid ${theme.palette.secondary.main}`,
                      lineHeight: ".1em",
                    }}
                    variant="h6"
                    component="div"
                  >
                    <Paper
                      component={"span"}
                      sx={{
                        bgcolor: "primary.main",
                        color: "secondary.main",
                        boxShadow: "none",
                        pr: 3,
                      }}
                    >
                      Details
                    </Paper>
                  </Typography>
                  <Box component={"p"} sx={{ color: "info.light" }}>
                    {feature.featureDes}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Link
            onClick={(event) => {
              event.preventDefault();
              window.open(project.liveSite, "_blank");
            }}
            href="#"
            underline="always"
            sx={{ color: "#9c27b0", textDecoration: "underline" }}
          >
            Live Site
          </Link>
          <Link
            onClick={(event) => {
              event.preventDefault();
              window.open(project.clientCode, "_blank");
            }}
            href="#"
            underline="always"
            sx={{ color: "#9c27b0", textDecoration: "underline" }}
          >
            Client Side Code
          </Link>
          <Link
            onClick={(event) => {
              event.preventDefault();
              window.open(project.serverCode, "_blank");
            }}
            href="#"
            underline="always"
            sx={{ color: "#9c27b0", textDecoration: "underline" }}
          >
            Server SIde Code
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProjectDetail;
