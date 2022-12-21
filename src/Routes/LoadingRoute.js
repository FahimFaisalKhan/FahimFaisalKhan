import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { MyLoader } from "../contexts/LoaderContext";
import IconLoader from "../SharedComps/Loader/IconLoader";

const LoadingRoute = ({ children }) => {
  const { loading } = useContext(MyLoader);
  console.log(loading);
  if (loading) {
    return (
      <Typography
        component={"div"}
        variant="h2"
        fontSize={"2rem"}
        width="10rem"
      >
        <IconLoader />
      </Typography>
    );
  }
  return children;
};

export default LoadingRoute;
