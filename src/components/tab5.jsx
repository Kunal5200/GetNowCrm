import support from "@/backgroundImages/customerSupport.svg";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";

const Tab5 = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={4} mt={4}>
          <Grid item lg={4} textAlign={"center"}>
            <img src={support.src} width={200} />
          </Grid>
          <Grid item lg={8}>
            <Typography fontSize={24} color={"#516E90"} fontWeight={700} mb={3}>
              Customer support
            </Typography>
            <Grid container spacing={4}>
              <Grid item lg={6}>
                <Typography fontSize={16} color={"#757575"}>
                  Do you recall the annoying feeling that you went to your
                  Internet banking and one time you wanted just to talk to
                  someone and instead you had either an automatic response
                  system or F&Q with a loop and you end up being upset, lost and
                  wasted time? Yeah. You don’t want that.
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography fontSize={16} color={"#757575"}>
                  Automatisation is great when it works well, is simple and user
                  friendly.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Tab5;
