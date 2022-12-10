import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../SharedComps/Footer/Footer";
import Navigation from "../../SharedComps/Navigation/Navigation";

const MainLayout = () => {
  return (
    <Box>
      <Navigation>
        <Outlet />
      </Navigation>
      <Footer />
    </Box>
  );
};

export default MainLayout;
