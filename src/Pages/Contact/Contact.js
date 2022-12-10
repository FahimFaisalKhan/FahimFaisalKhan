import { Copyright } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xcretnc",
        "template_s08zu5v",
        form.current,
        "RxNDI5DL2EnEO8doy"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Box sx={{ mx: 0, width: "100%", minHeight: "100vh" }}>
      <Grid container component="main" sx={{ height: "100vh", width: "100%" }}>
        <Grid
          item
          xs={12}
          component={Paper}
          sx={{ bgcolor: "primary.main", width: "100%" }}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "secondary.main" }}
            >
              Write Your message Below
            </Typography>
            <Box
              ref={form}
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, minWidth: { lg: "80rem" }, width: { lg: "80rem" } }}
            >
              <InputLabel sx={{ color: "info.main" }} htmlFor="user_name">
                Name
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="user_name"
                autoFocus
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  maxWidth: "100%",
                  mb: 3,
                }}
              />
              <InputLabel sx={{ color: "info.main" }} htmlFor="user_email">
                Your Email
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="user_email"
                autoComplete="email"
                type={"email"}
                autoFocus
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  maxWidth: "100%",
                  mb: 3,
                }}
              />
              <InputLabel sx={{ color: "info.main", mb: 2 }} htmlFor="message">
                Message
              </InputLabel>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                required
                name="message"
                style={{ width: "20rem", minHeight: "15rem" }}
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="info"
                sx={{ mt: 3, mb: 2, py: 2 }}
              >
                Send
              </Button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
