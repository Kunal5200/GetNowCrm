import { Box, Container, Grid } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#273f5b",
        color: "#fff",
        padding: "4% 0",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={8}>
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <Box>
                  <CountUp end={6237} />
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <CountUp end={4000} />
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <CountUp end={3} />
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <CountUp end={4} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            one
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Counter;
