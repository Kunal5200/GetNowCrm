import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import styles from "@/styles/secured.module.css";
import slider1Image from "@/backgroundImages/slide1.png";
const Slider1 = () => {
  return (
    <div>
      <Box className={styles.banner1}>
        <Box sx={{ mb: 15 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={2}
            justifyContent={"center"}
            pt={5}
            mb={3}
          >
            {/* <img src={dootedLine.src} /> */}
            <Typography
              letterSpacing={10}
              fontSize={30}
              color={"#516e90"}
              fontWeight={800}
            >
              ---
            </Typography>
            <Typography
              color={"#516e90"}
              fontSize={50}
              fontWeight={700}
              variant="h2"
            >
              The Smart Simple CRM
            </Typography>
            <Typography
              letterSpacing={10}
              fontSize={30}
              color={"#516e90"}
              fontWeight={800}
            >
              ---
            </Typography>
            {/* <img src={dootedLine.src} /> */}
          </Stack>
          <Typography color={"#869CB6"} fontSize={18}>
            Build Stronger Customer Relationships, Make more sales and save
            time.
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={5}
            mt={4}
          >
            <Button
              sx={{
                border: "1px solid #FECF39",
                borderRadius: 8,
                width: 200,
                p: 1.5,
                backgroundColor: "#FECF39",
                color: "#fff",
                ":hover": {
                  color: "#fff",
                  backgroundColor: "#FECF39",
                },
                fontWeight: 700,
              }}
            >
              Learn More
            </Button>
            <Button
              sx={{
                border: "1px solid #80BE2D",
                borderRadius: 8,
                width: 200,
                p: 1.5,
                backgroundColor: "#80BE2D",
                color: "#fff",
                fontWeight: 700,
                ":hover": {
                  color: "#fff",
                  backgroundColor: "#80BE2D",
                },
              }}
            >
              Get Started Now
            </Button>
          </Stack>
        </Box>
        <Grid container>
          <Grid items lg={8} margin={"auto"}>
            <img src={slider1Image.src} height={"100%"} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Slider1;
