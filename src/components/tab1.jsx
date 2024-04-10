import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import dial from "@/backgroundImages/dial.svg";
const Tab1 = () => {
  return (
    <div>
      <Grid container p={4}>
        <Grid item lg={6} textAlign={"center"}>
          <img src={dial.src} width={200} />
        </Grid>
        <Grid item lg={6}>
          <Typography
            variant="h1"
            color="#516E90"
            fontSize={24}
            letterSpacing={1.4}
            fontWeight={600}
          >
            Flexibility
          </Typography>
          <Grid container>
            <Grid item lg={6}></Grid>
            <Grid item lg={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tab1;
