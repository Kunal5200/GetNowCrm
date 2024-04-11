import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import bussiness from "@/assessts/images/GrowingBussiness.png";
import styles from "@/styles/index.module.css";
const GrowingBussiness = () => {
  return (
    <Box className={styles.bussinessBackground}>
      <Container
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "3rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Box
              sx={{
                padding: "20px 20px 25px 80px",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  color={"#516e90"}
                  lineHeight={"1.3em"}
                  fontSize={"38px"}
                  fontWeight={700}
                >
                  Ready to Start Growing <br /> Your Business?
                </Typography>{" "}
              </Box>
              <Box
                sx={{
                  mt: 5,
                }}
              >
                <Typography
                  variant="p"
                  color={"grey"}
                  fontSize={"18px"}
                  fontWeight={500}
                >
                  Watch a demo to learn more today.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                }}
              >
                <TextField fullWidth label="Subscribe" />
                <button className={styles.button}>SUBSCRIBE</button>
              </Box>
            </Box>
          </Grid>{" "}
          <Grid item xs={5}>
            <Box>
              <img src={bussiness.src} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GrowingBussiness;
