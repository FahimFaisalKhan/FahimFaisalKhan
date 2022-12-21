import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProjectCard({ projectData, id }) {
  const {
    name,
    description,
    image,
    technologies,
    liveSite,
    clientCode,
    serverCode,
  } = projectData;
  return (
    <Card
      raised={false}
      variant="contained"
      sx={{
        width: { sx: "100%", md: "70%" },
        border: "none",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",

        pb: 2,

        // background: `linear-gradient(90deg, #0a2472, #00072d)`,
        background: (theme) =>
          `linear-gradient(to right, ${theme.palette.primary.extraLight}, ${theme.palette.primary.main})`,
      }}
    >
      <CardMedia
        width={600}
        component="img"
        src={image}
        alt="green iguana"
        sx={{ borderBottomRightRadius: "8px" }}
      />
      <CardContent sx={{ pl: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="info.light"
          fontSize={"1.7rem"}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "grey.A100" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ pl: 0, justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            gap: ".6rem",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open(liveSite, "_blank");
            }}
            color="info"
            variant="contained"
            size="small"
            sx={{ justifyContent: "start", textTransform: "capitalize" }}
          >
            Live Website
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open(clientCode, "_blank");
            }}
            color="info"
            variant="contained"
            size="small"
            sx={{ justifyContent: "start", textTransform: "capitalize" }}
          >
            Client Side Code
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open(serverCode, "_blank");
            }}
            color="info"
            variant="contained"
            size="small"
            sx={{ justifyContent: "start", textTransform: "capitalize" }}
          >
            Server Side Code
          </Button>
        </Box>

        <Link to={`/project/${id}`} style={{ textDecoration: "none" }}>
          <Button
            color="secondary"
            variant="contained"
            size="small"
            sx={{
              justifyContent: "start",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            View Detail
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
