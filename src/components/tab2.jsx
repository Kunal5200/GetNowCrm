import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import processing from "@/backgroundImages/processing.svg";
const Tab2 = () => {
  return (
    <div>
      <Box>
        <Grid container p={4} spacing={4}>
          <Grid item lg={6} textAlign={"center"}>
            <img src={processing.src} width={200} />
          </Grid>
          <Grid item lg={6}>
            <Typography fontSize={24} color={"#516E90"} fontWeight={700} mb={3}>
              Processing Options
            </Typography>
            <Typography fontSize={18} color={"#757575"}>
              The way a payment form looks like may decide not only upon your
              conversion rate but also it will create lower or higher trust from
              your buyers. Check if the provider offers you an embedded custom
              form to keep your users always on your website (no-redirection to
              other parties’ website will result in significantly higher
              conversion).
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Tab2;
