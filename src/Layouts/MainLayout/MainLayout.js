import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MyLoader } from "../../contexts/LoaderContext";
import Footer from "../../SharedComps/Footer/Footer";
import IconLoader from "../../SharedComps/Loader/IconLoader";
import Navigation from "../../SharedComps/Navigation/Navigation";

const MainLayout = () => {
  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <Navigation>
        <Outlet />
      </Navigation>
      <Footer />
    </Box>
  );
};

export default MainLayout;
