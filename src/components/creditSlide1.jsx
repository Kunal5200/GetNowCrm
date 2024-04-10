import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
// import image from "@/backgroundImages/E-commerce-shoping-cart.png";
// import image from '@/icons/clouds.png'
const CreditSlide = (props) => {
  return (
    <div>
      <Box className={props.className} sx={{ backgroundColor: props.bgColor }}>
        <Container>
          <Grid container alignItems={"center"} pt={5}>
            <Grid item lg={6} position={"relative"}>
              <img src={props.img} height={550} />
            </Grid>
            <Grid item lg={6}>
              <Typography
                color={props.titleColor}
                fontSize={20}
                textAlign={"start"}
                textTransform={"uppercase"}
                mb={2}
              >
                {props.title}
              </Typography>
              <Typography
                variant="h2"
                fontSize={38}
                textAlign={"start"}
                mb={3}
                fontWeight={700}
                color={props.headingColor}
              >
                {props.heading}
              </Typography>
              <Typography
                lineHeight={1.75}
                fontWeight={400}
                textAlign={"start"}
                color={props.titleColor}
              >
                {props.description}
              </Typography>
              <Box sx={{ mt: 4, textAlign: "start" }}>
                <Button
                  sx={{
                    borderRadius: 50,
                    backgroundColor: "#000",
                    color: "#fff",
                    fontWeight: 900,
                    p: 1.5,
                    width: 300,
                    ":hover": {
                      color: "#fff",
                      backgroundColor: "#000",
                    },
                  }}
                >
                  get started Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default CreditSlide;
