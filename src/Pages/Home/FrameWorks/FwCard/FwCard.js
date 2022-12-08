import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const MyCard = styled(Card)(
  ({ theme }) => `
    background :radial-gradient(ellipse at left bottom, ${theme.palette.primary.main} 0%,${theme.palette.primary.main} 20%, ${theme.palette.primary.light} 70%,  ${theme.palette.primary.main}  100%);
  
   
    position:relative;
    
    border: 2px solid  ${theme.palette.primary.extraLight};
    border-radius:5px;
  
  
    
  
   
  
  `
);

export default function FwCard({ fw }) {
  const { framework, description } = fw;
  const card = (
    <React.Fragment>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
          {framework}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <MyCard
        variant="outlined"
        sx={{
          minHeight: "24rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {card}
      </MyCard>
    </Box>
  );
}
