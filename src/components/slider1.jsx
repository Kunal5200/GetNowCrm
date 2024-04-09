import { Box, Stack, Typography } from "@mui/material";
import styles from "@/styles/secured.module.css";
const Slider1 = () => {
  return (
    <div>
      <Box className={styles.banner1}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          justifyContent={"center"}
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
          <Typography color={"#516e90"} fontSize={48}>
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
        <Typography>
          Build Stronger Customer Relationships, Make more sales and save time.
        </Typography>
      </Box>
    </div>
  );
};

export default Slider1;
