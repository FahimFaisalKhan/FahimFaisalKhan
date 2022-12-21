import {
  Box,
  Button,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import CottageIcon from "@mui/icons-material/Cottage";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { BsMessenger } from "react-icons/bs";
// import { BsWhatsapp } from "react-icons/bs";
import { WhatsApp } from "@mui/icons-material";
const About = () => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: "info.light" }}>
          Contact
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ maxWidth: "1550px", margin: "5rem auto" }}>
      <Typography
        sx={{
          mt: 4,
          mb: 2,
          fontSize: "1.8rem",
          borderBottom: (theme) => `4px solid ${theme.palette.secondary.main}`,
          lineHeight: ".1em",
          textAlign: "center",
        }}
        variant="h6"
        component="div"
      >
        <Paper
          component={"span"}
          sx={{
            bgcolor: "primary.main",
            color: "secondary.main",
            boxShadow: "none",
            px: 2,
          }}
        >
          About me
        </Paper>
      </Typography>
      <Paper
        component={"p"}
        sx={{
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light},${theme.palette.primary.main})`,
          borderRight: (theme) => `4px solid ${theme.palette.secondary.main}`,
          borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
          borderRadius: 0,
          color: "grey.400",
          px: 5,
          py: 3,
          mt: 4,
          fontSize: "1.2rem",
        }}
      >
        Hi, I am Fahim Faisal Khan. I am a <b>Full-Stack Web-Developer</b> from
        Bangladesh. I am self-motivated and highly dedicated in whatever I do.
        Developing web is not only my profession, it is my passion as well.
        Internet has brought the whole world together. I belive, to buld a
        website with good UX is to make another people's life easier. With this
        vision and to make web a better place I continue my journy as a
        web-developer.
      </Paper>
      <Typography
        sx={{
          mt: 15,
          mb: 2,
          fontSize: "1.8rem",
          borderBottom: (theme) => `4px solid ${theme.palette.secondary.main}`,
          lineHeight: ".1em",
          textAlign: "center",
        }}
        variant="h6"
        component="div"
      >
        <Paper
          component={"span"}
          sx={{
            bgcolor: "primary.main",
            color: "secondary.main",
            boxShadow: "none",
            px: 2,
          }}
        >
          Education
        </Paper>
      </Typography>
      <Paper
        component={"p"}
        sx={{
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light},${theme.palette.primary.main})`,
          borderRight: (theme) => `4px solid ${theme.palette.secondary.main}`,
          borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
          borderRadius: 0,
          color: "grey.400",
          px: 5,
          py: 3,
          mt: 4,
          fontSize: "1.2rem",
          display: "flex",
          flexDirection: "column",
          rowGap: "1rem",
        }}
      >
        <Box sx={{ borderBottom: "1px solid white" }}>
          <Typography
            component={"p"}
            variant="p"
            sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <SchoolIcon sx={{ color: "grey.100" }} /> Royal University Of Dhaka,
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <i>B.Sc in Computer Science and Engineering.</i>
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "1rem",
              fontSize: "1rem",
            }}
          >
            2018 — Present
          </Typography>
        </Box>
        <Box sx={{ borderBottom: "1px solid white" }}>
          <Typography
            component={"p"}
            variant="p"
            sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <BorderColorIcon sx={{ color: "grey.100" }} /> Dhaka Eastern
            College,
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <i>HSC Science Department.</i>
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "1rem",
              fontSize: "1rem",
            }}
          >
            2013 — 2015
          </Typography>
        </Box>
        <Box>
          <Typography
            component={"p"}
            variant="p"
            sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <BorderColorIcon sx={{ color: "grey.100" }} /> Monipur High School
            and College,
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
          >
            <i>SSC Science Department.</i>
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "1rem",
              fontSize: "1rem",
            }}
          >
            2002 — 2012
          </Typography>
        </Box>
      </Paper>
      <Typography
        sx={{
          mt: 15,
          mb: 2,
          fontSize: "1.8rem",
          borderBottom: (theme) => `4px solid ${theme.palette.secondary.main}`,
          lineHeight: ".1em",
          textAlign: "center",
        }}
        variant="h6"
        component="div"
      >
        <Paper
          component={"span"}
          sx={{
            bgcolor: "primary.main",
            color: "secondary.main",
            boxShadow: "none",
            px: 2,
          }}
        >
          Adress
        </Paper>
      </Typography>
      <Paper
        component={"p"}
        sx={{
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light},${theme.palette.primary.main})`,
          borderRight: (theme) => `4px solid ${theme.palette.secondary.main}`,
          borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
          borderRadius: 0,
          color: "grey.400",
          px: 5,
          py: 3,
          mt: 4,
          fontSize: "1.2rem",
        }}
      >
        <List sx={{ width: "100%" }}>
          <ListItem>
            <ListItemAvatar>
              <CottageIcon sx={{ color: "grey.100" }} />
            </ListItemAvatar>
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                sx: { color: "grey.100", fontSize: "1.2rem" },
              }}
              secondary="58/C Meradia, Khilgaon, Dhaka-1219, Bangladesh."
              secondaryTypographyProps={{
                sx: { color: "grey.400", fontSize: "1rem" },
              }}
              sx={{ color: "grey.100" }}
            />
          </ListItem>
        </List>
      </Paper>
      <Typography
        sx={{
          mt: 15,
          mb: 2,
          fontSize: "1.8rem",
          borderBottom: (theme) => `4px solid ${theme.palette.secondary.main}`,
          lineHeight: ".1em",
          textAlign: "center",
        }}
        variant="h6"
        component="div"
      >
        <Paper
          component={"span"}
          sx={{
            bgcolor: "primary.main",
            color: "secondary.main",
            boxShadow: "none",
            px: 2,
          }}
        >
          Contact
        </Paper>
      </Typography>
      <Paper
        component={"p"}
        sx={{
          background: (theme) =>
            `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light},${theme.palette.primary.main})`,
          borderRight: (theme) => `4px solid ${theme.palette.secondary.main}`,
          borderLeft: (theme) => `4px solid ${theme.palette.secondary.main}`,
          borderRadius: 0,
          color: "grey.400",
          px: { xs: 0, md: 5 },
          py: 3,
          mt: 4,
          fontSize: "1.2rem",
        }}
      >
        <Grid container spacing={12}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: (theme) => `2px solid ${theme.palette.info.light}`,

                textAlign: "center",
                minHeight: "15rem",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Typography component={"h3"} variant="h5">
                Email
              </Typography>
              <Typography
                component={"h3"}
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "1rem",

                  mt: -5,
                }}
              >
                <EmailIcon sx={{ color: "grey.100" }} />
                KhanFahimFaisal@gmail.com
              </Typography>
              <div>
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    window.open("https://mail.google.com/", "_blank");
                  }}
                  variant="contained"
                  color="info"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: (theme) => `2px solid ${theme.palette.info.light}`,
                textAlign: "center",
                minHeight: "15rem",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Typography component={"h3"} variant="h5">
                Massenger
              </Typography>
              <Typography
                component={"h3"}
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "1rem",
                  mt: -5,
                }}
              >
                <BsMessenger />
                Fahim Faisal
              </Typography>
              <div>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "http://m.me/KhanFahimFaisal",

                      "_blank"
                    );
                  }}
                  variant="contained"
                  color="info"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                border: (theme) => `2px solid ${theme.palette.info.light}`,
                textAlign: "center",
                minHeight: "15rem",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Typography component={"h3"} variant="h5">
                Whatsapp
              </Typography>
              <Typography
                component={"h3"}
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: "1rem",
                  mt: -5,
                }}
              >
                <WhatsApp sx={{ color: "grey.100" }} /> +8801871461409
              </Typography>
              <div>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://wa.me/8801871461409?text=",

                      "_blank"
                    );
                  }}
                  variant="contained"
                  color="info"
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default About;
