import React from "react";
import { Box } from "@mui/material";
import { useFetch } from "../../../hooks/useFetch";
import loading from "../../../Static/Images/loading.gif";

const Map = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%", background: `url(${loading})` },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "2rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          textAlign: "right",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
            background: "none",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            component={"iframe"}
            frameborder="0"
            scrolling="no"
            sx={{
              height: "100%",
              width: "100%",
            }}
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Meradia, Dhaka, Bangladesh&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Map;
