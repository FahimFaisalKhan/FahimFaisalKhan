import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { keyframes, styled } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { Height } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "Blogs"];

function Navigation(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDownload = () => {
    const config = { responseType: "blob" };
    axios.get("Fahim Faisal Khan.pdf", config).then((response) => {
      const href = URL.createObjectURL(response.data);

      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", "Fahim Faisal Khan");
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const shadowAn = keyframes`
  0%{
    opacity: 0;
    
  }
  50%{
    opacity:1;
    
  }
  100%{
    opacity: 0;
   
  }
  `;

  const Btn = styled(Button)(({ theme }) => ({
    position: "fixed",
    zIndex: 20,
    right: 50,
    borderRadius: "8px",
    // animation: `${shadowAnm} 3s ease-in-out infinite`,
    "&::after": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: "8px",
      boxShadow:
        "rgb(47, 249, 197,0.4) 0 0 0 5px, rgb(121, 251, 218 ,0.3) 0 0 0 12px , rgb(195, 253, 239,0.2) 0 0 0 17px , rgb(244, 255, 252,0.1) 0 0 0 22px",
      opacity: 0,

      animation: `${shadowAn}  4s ease-in-out 0.5s infinite backwards`,
    },
  }));
  const MyBox = styled(Box)(({ theme }) => ({
    bgcolor: (theme) => `${theme.palette.primary.main}`,
  }));

  const drawer = (
    <MyBox
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: (theme) => `${theme.palette.primary.main}`,
        flexGrow: 1,
      }}
    >
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            to={`/${item.toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} sx={{ color: "info.light" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Btn
              onClick={handleDownload}
              variant="outlined"
              color="secondary"
              sx={{ position: "relative", right: 0, left: 10, mt: 2 }}
            >
              Download Resume
            </Btn>
          </ListItemButton>
        </ListItem>
      </List>
    </MyBox>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          boxShadow: 0,
          borderBottom: "2px solid ",
          borderColor: "primary.light",
          py: 0.5,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block", margin: "0 auto" } }}>
            {navItems.map((item, i) => {
              return (
                <Link
                  to={`/${item.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    key={item}
                    sx={{
                      color: "grey.400",
                      mr: 5,
                      "&:focus": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    {item}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Btn
            onClick={handleDownload}
            variant="outlined"
            color="secondary"
            sx={{
              right: { xs: 10, sm: 0, md: 50 },
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            Download Resume
          </Btn>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{}}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ px: 0, width: "100%" }} minHeight={"100vh"}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;
