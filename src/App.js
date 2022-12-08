import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";

import { Box, createTheme, CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#001d3d",
        light: "#003566",
        extraLight: "#014f86",
      },
      secondary: {
        main: "#06d6a0",
      },
    },
  });

  return (
    <Box bgcolor={"#001d3d"}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
}

export default App;
