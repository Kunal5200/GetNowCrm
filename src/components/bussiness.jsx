import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "@/assessts/images/nmi-150x80.png";
import image2 from "@/assessts/images/authorize.net_-150x80.png";
import image3 from "@/assessts/images/stripe-150x80.png";
import image4 from "@/assessts/images/chargeback-150x80.png";
import image5 from "@/assessts/images/merchantstronghold-200x96.png";
import image6 from "@/assessts/images/SSL-STREET-200x96.png";

const Bussiness = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fecf39",
        color: "#fff",
        textAlign: "center",
        padding: "70px 0 20px 0",
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontSize: "42px",
            fontWeight: 600,
          }}
        >
          The Best in the Business Love us!
        </Typography>
        <Box
          sx={{
            my: 6,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Box>
                <img src={image1.src} />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src={image2.src} />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src={image3.src} />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src={image4.src} />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <img src={image5.src} />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{
                  px: 4,
                }}
              >
                <img src={image6.src} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Bussiness;
