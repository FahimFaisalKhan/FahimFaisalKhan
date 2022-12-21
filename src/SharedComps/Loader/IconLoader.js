import { keyframes, Paper } from "@mui/material";
import React from "react";

const anm = keyframes`

from{
   
    stroke-dashoffset: 270.1082763671875;
}
to{
    stroke-dashoffset:0;
    
  
}
`;
const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)"></g>
      <Paper
        component={"path"}
        sx={{
          stroke: "#06d6a0",
          strokeWidth: 5,
          strokeDasharray: 270.1082763671875,
          animation: `${anm} 6s infinite ease-in-out`,
        }}
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
    <text
      x="35"
      y="70"
      fill="#06d6a0"
      fontSize="55px"
      fontFamily="Times New Roman"
    >
      F
    </text>
  </svg>
);

export default IconLoader;
