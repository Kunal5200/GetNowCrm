import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#273f5b",
        color: "#fff",
        padding: "6% 0",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={8}>
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <Box>
                  <div style={{ fontSize: "4em", color: "yellow" }}>
                    <CountUp end={6237} />
                  </div>
                  <Typography
                    sx={{
                      variant: "h4",
                      fontSize: "25px",
                      fontWeight: 600,
                      mt: 2,
                    }}
                  >
                    Line of codes
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <div style={{ fontSize: "4em", color: "yellow" }}>
                    <CountUp end={4000} />
                  </div>
                  <Typography
                    sx={{
                      variant: "h4",
                      fontSize: "25px",
                      fontWeight: 600,
                      mt: 2,
                    }}
                  >
                    Solution
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <div style={{ fontSize: "4em", color: "yellow" }}>
                    <CountUp end={3} /> M +
                  </div>
                  <Typography
                    sx={{
                      variant: "h4",
                      fontSize: "25px",
                      fontWeight: 600,
                      mt: 2,
                    }}
                  >
                    Active users
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box>
                  <div style={{ fontSize: "4em", color: "yellow" }}>
                    <CountUp end={4} /> M +
                  </div>
                  <Typography
                    sx={{
                      variant: "h4",
                      fontSize: "25px",
                      fontWeight: 600,
                      mt: 2,
                    }}
                  >
                    Download
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Typography variant="h5" fontSize={"30x"} fontWeight={600}>
                Connect Online, Build Real-
                <br />
                World Relationships
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                mt: 4,
              }}
            >
              <Typography
                variant="p"
                color={"grey"}
                fontSize={"18px"}
                fontWeight={500}
              >
                Start building a modern customer
              </Typography>
            </Box>{" "}
            <Box
              sx={{
                textAlign: "center",
                mt: 1,
              }}
            >
              <Typography
                variant="p"
                color={"grey"}
                fontSize={"18px"}
                fontWeight={500}
              >
                Relationship Management system
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Counter;
