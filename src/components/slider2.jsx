import React from "react";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import styles from "@/styles/secured.module.css";
import banner2 from "@/backgroundImages/slide2.png";
const Slider2 = () => {
  return (
    <div>
      <Box className={styles.banner2}>
        <Container>
          <Grid container spacing={4} alignItems={"center"} px={3}>
            <Grid item lg={6} >
              <img src={banner2.src} height={730} />
            </Grid>
            <Grid item lg={6}>
              <Typography
                variant="h1"
                color="#516e90"
                fontSize={38}
                fontWeight={700}
                textAlign={"start"}
                mb={3}
              >
                Get Organized, Improve Visibility, and grow sales
              </Typography>
              <Typography
                variant="h6"
                fontSize={18}
                textAlign={"start"}
                color={"#516390"}
              >
                SpellCRM solution that enables you to track leads, Optimize
                sales activities, Predict customer behavior, Automate sales
                processes, and close deals faster.
              </Typography>
              <Box textAlign={"start"} mt={3}>
                <Button
                  sx={{
                    border: "1px solid #80BE2D",
                    borderRadius: 8,
                    width: 200,
                    p: 1.5,
                    backgroundColor: "#80BE2D",
                    color: "#fff",
                    ":hover": {
                      color: "#fff",
                      backgroundColor: "#80BE2D",
                    },
                    fontWeight: 700,
                  }}
                >
                  Get Started Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Slider2;
