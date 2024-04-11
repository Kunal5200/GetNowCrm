import Security from "@/backgroundImages/security.svg";
import { Box, Grid, Stack, Typography, Button } from "@mui/material";

const Tab4 = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={4} mt={4}>
          <Grid item lg={4} textAlign={"center"}>
            <img src={Security.src} width={200} />
          </Grid>
          <Grid item lg={8}>
            <Typography fontSize={24} color={"#516E90"} fontWeight={700} mb={3}>
              Security
            </Typography>
            <Typography fontSize={16} color={"#757575"} fontWeight={600}>
              Digital security is not only a hot topic today but an absolute
              must in case of online payments. Ask your payments provider about
              the data encryption, SSL certificates and CVV2 verification and
              any additional encryption algorithms ensuring data protection of
              your customers.
            </Typography>
            <Typography fontSize={16} color={"#757575"} mt={3}>
              Verify your payment provider if they meet the most strict security
              requirements which are known as PCI Level 1. That confirms that
              not only the technology of the platform is secure, but also the
              entire organization behind it with people are fully aware of the
              risk factors in regards to payments processing and are ready to
              act fast due to proper procedures in place to prevent misconduct
              from occurring.
            </Typography>
            <Box>
              <Button
                sx={{
                //   boxShadow: "5px 0 15px 0 rgba(39, 63, 91, 0.3)",
                  backgroundColor: "transparent",
                  borderColor: "#6987ab",
                  color: "#6987ab",
                  border: "1px solid #6987ab",
                  p: 1.5,
                  width: 200,
                  mt: 3,
                  borderRadius: 20,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Tab4;
