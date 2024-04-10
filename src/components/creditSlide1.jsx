import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import image from "@/backgroundImages/E-commerce-shoping-cart.png";
const CreditSlide = () => {
  return (
    <div>
      <Box className="bannerCredit1">
        <Container>
          <Grid container alignItems={"center"} pt={8}>
            <Grid item lg={6} position={"relative"}>
              <img src={image.src} height={550} />
            </Grid>
            <Grid item lg={6}>
              <Typography color="#0D3963" fontSize={20}>
                Navigate customers through sales funnels with
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default CreditSlide;
