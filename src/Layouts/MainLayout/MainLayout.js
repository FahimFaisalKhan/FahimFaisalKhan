import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../SharedComps/Navigation/Navigation";

const MainLayout = () => {
  return (
    <Box>
      <Navigation>
        <Outlet />
      </Navigation>
    </Box>
  );
};

export default MainLayout;
