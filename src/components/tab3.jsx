import technical from "@/backgroundImages/technical.svg";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Done from "@/icons/checkmark.png";
const Tab3 = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={4} mt={4}>
          <Grid item lg={4} textAlign={"center"}>
            <img src={technical.src} width={200} />
          </Grid>
          <Grid item lg={8}>
            <Typography fontSize={24} color={"#516E90"} fontWeight={700} mb={3}>
              Technical Integration
            </Typography>
            <Typography fontSize={16} color={"#757575"}>
              Hassle-free is the best word that describes how the integration
              should be done. That can be understood as: fast, simple and easy
              to execute not only by a developer but also by a regular business
              owner. Few clicks, few adjustments and you are ready to go in few
              minutes. As simple as it gets.
            </Typography>
            <Grid container mt={4}>
              <Grid item lg={6} p={2}>
                <Box>
                  <Stack
                    direction={"row"}
                    alignItems={"flex-start"}
                    spacing={2}
                  >
                    <img src={Done.src} />
                    <Box>
                      <Typography
                        color={"#516e90"}
                        fontSize={18}
                        fontWeight={700}
                      >
                        Quick Settings
                      </Typography>
                      <Typography
                        color={"#6987AB"}
                        fontWeight={700}
                        fontSize={16}
                        mt={2}
                      >
                        The best payment providers should offer a set of APIs
                        allowing you to integrate with just a few lines of code
                        in a matter of hours.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
              <Grid item lg={6} p={2}>
                <Box>
                  <Stack
                    direction={"row"}
                    alignItems={"flex-start"}
                    spacing={2}
                  >
                    <img src={Done.src} />
                    <Box>
                      <Typography
                        color={"#516e90"}
                        fontSize={18}
                        fontWeight={700}
                      >
                        Looks Perfect
                      </Typography>
                      <Typography
                        color={"#6987AB"}
                        fontWeight={700}
                        fontSize={16}
                        mt={2}
                      >
                        Keep your developer happy or do it yourself.
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Tab3;
