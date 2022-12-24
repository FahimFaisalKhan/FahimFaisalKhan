import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { MyLoader } from "../../contexts/LoaderContext";

const Blogs = () => {
  const { setLoading } = useContext(MyLoader);
  useEffect(() => {
    setLoading(false);
    return () => setLoading(true);
  }, [setLoading]);
  return (
    <Box component={"h2"} sx={{ color: "White", textAlign: "center" }}>
      Comming Soon
    </Box>
  );
};

export default Blogs;
