import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";

import { Box, createTheme, CssBaseline } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";

function App() {
  // const styles = (theme) => ({
  //   "@global": {
  //     "*::-webkit-scrollbar": {
  //       width: "0.4em",
  //     },
  //     "*::-webkit-scrollbar-track": {
  //       "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  //     },
  //     "*::-webkit-scrollbar-thumb": {
  //       backgroundColor: "rgba(0,0,0,.1)",
  //       outline: "1px solid slategrey",
  //     },
  //   },
  // });
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00072d",
        light: "#001c55",
        extraLight: "#0a2472",
        dark: "#000000",
      },
      secondary: {
        main: "#06d6a0",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: darkScrollbar(),
          "*::-webkit-scrollbar-track": {
            background: "#001c55",
          },
        }),
      },
    },
  });

  return (
    <Box bgcolor={"#00072d"}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </Box>
  );
}

export default App;
