import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(1.1)" }}
  >
    •
  </Box>
);

const MyCard = styled(Card)(
  ({ theme }) => `
  background :linear-gradient(180deg, rgb(250, 250, 250 , 0.32) 0%,rgb(250, 250, 250 , 0.32) 30%, ${theme.palette.primary.light} 70%,  ${theme.palette.primary.main}  100%);
  box-shadow:none;
`
);

export default function ExCard({ topic }) {
  const { language, features, description } = topic;
  return (
    <MyCard
      sx={{
        borderRadius: "2px",
        minHeight: "27rem",
        transition: "all .3s",
        "&:hover": {
          transform: "translateY(-1rem)",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          fontWeight={300}
          fontSize={"2rem"}
          color="primary.main"
        >
          {language}
        </Typography>
        <Typography
          sx={{
            mb: 3,
            fontSize: "12px",
            display: "flex",
            flexWrap: "wrap",
            color: "primary.main",
          }}
          color="text.secondary"
        >
          {features.map((feature, i) => (
            <Box component={"p"} height=".5px" marginRight={1}>
              <span>{bull}</span>
              {feature}
            </Box>
          ))}
        </Typography>
        <Typography variant="body2" color={"grey.A400"} fontSize="1rem">
          {description}
        </Typography>
      </CardContent>
    </MyCard>
  );
}
