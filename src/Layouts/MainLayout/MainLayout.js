import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MyLoader } from "../../contexts/LoaderContext";
import Footer from "../../SharedComps/Footer/Footer";
import IconLoader from "../../SharedComps/Loader/IconLoader";
import Navigation from "../../SharedComps/Navigation/Navigation";
import { ScrollRestoration } from "react-router-dom";
import { ScrollTop } from "../../hooks/useScroll";

const MainLayout = () => {
  return (
    <Box sx={{ maxWidth: "100vw" }}>
      <ScrollTop />
      <Navigation>
        <Outlet />
      </Navigation>
      <Footer />
      {/* <ScrollRestoration /> */}
    </Box>
  );
};

export default MainLayout;
