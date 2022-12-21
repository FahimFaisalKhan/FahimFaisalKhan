import React, { useContext, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Banner from "./Banner/Banner";

import Languages from "./Languages/Languages";
import FrameWork from "./FrameWorks/FrameWork";
import Technologies from "./Technologies/Technologies";
import Projects from "./Projects/Projects";
import IconLoader from "../../SharedComps/Loader/IconLoader";
import { MyLoader } from "../../contexts/LoaderContext";

const Home = () => {
  const { loading } = useContext(MyLoader);
  useEffect(() => {
    const unsubscribe = () => {
      if (loading) {
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
    };
    return () => {
      unsubscribe();
    };
  }, [loading]);

  return (
    <Box>
      <Box
        minHeight={"100vh"}
        sx={{
          background: `radial-gradient(100% 100% at left , #00072d 0% , #00072d 79.9%,#001c55 80%  , #00072d 80.2%,#00072d 100%)`,
        }}
      >
        <Banner />
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          py: 25,
          borderBottom: "3px solid transparent",
          borderImage: `linear-gradient(to right, transparent 0%, transparent 8%, #06d6a0 , transparent 92%)`,
          borderImageSlice: 1,
        }}
        maxWidth="1600px"
      >
        <Languages />
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          py: 20,
          borderBottom: "3px solid transparent",
          borderImage: `linear-gradient(to right, transparent 0%, transparent 8%, #06d6a0 , transparent 92%)`,
          borderImageSlice: 1,
        }}
        maxWidth="1600px"
      >
        <FrameWork />
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          py: 15,
          borderBottom: "3px solid transparent",
          borderImage: `linear-gradient(to right, transparent 0%, transparent 8%, #06d6a0 , transparent 92%)`,
          borderImageSlice: 1,
        }}
        maxWidth="1600px"
      >
        <Projects />
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          py: 15,

          mb: 15,
          display: { xs: "none", lg: "block" },
        }}
        maxWidth="1600px"
      >
        <Technologies />
      </Box>
    </Box>
  );
};

export default Home;