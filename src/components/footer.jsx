import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3e4d50",
        mt: 10,
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            color: "#fff",
            py: 12,
          }}
          spacing={10}
        >
          <Grid item xs={5}>
            <Box>
              <Typography variant="h1" fontSize={"45px"} fontWeight={700}>
                SpellCRM
              </Typography>{" "}
              <Typography
                variant="h6"
                marginTop={"25px"}
                fontSize={"17px"}
                fontWeight={500}
              >
                SpellCRM powers ecommerce entrepreneurs enabling them to
                maximize revenue through powerful analytics, flexible billing,
                risk management, and recurring customers.
              </Typography>{" "}
              <Typography
                variant="h6"
                marginTop={"25px"}
                fontSize={"16px"}
                fontWeight={500}
              >
                LEARN MORE ABOUT SPELLCRM
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography variant="h1" fontSize={"25px"} fontWeight={700}>
                Userful Links
              </Typography>
              <Box>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                  }}
                >
                  <li
                    style={{
                      marginBottom: "8px",
                      fontSize: "19px",
                      fontWeight: 500,
                    }}
                  >
                    Home
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      fontSize: "19px",
                      fontWeight: 500,
                    }}
                  >
                    About Us
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      fontSize: "19px",
                      fontWeight: 500,
                    }}
                  >
                    Contact
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      fontSize: "19px",
                      fontWeight: 500,
                    }}
                  >
                    Pricing
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      fontSize: "19px",
                      fontWeight: 500,
                    }}
                  >
                    Products
                  </li>
                  <li
                    style={{
                      marginBottom: "8px",
                      fontSize: "19px",
                      fontWeight: 500,
                    }}
                  >
                    Integration
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography
                variant="h1"
                fontSize={"25px"}
                fontWeight={700}
                textAlign={"right"}
              >
                Contact us
              </Typography>
              <Box
                sx={{
                  my: 4,
                }}
              >
                <Typography
                  variant="h6"
                  fontSize={"17px"}
                  fontWeight={500}
                  textAlign={"right"}
                >
                  info@spellcrm.com
                </Typography>
              </Box>
            </Box>
            <Box textAlign={"right"}>
              <Button
                sx={{
                  backgroundColor: "green",
                  color: "#fff",
                  width: 200,
                  borderRadius: 20,
                  p: 1.5,
                }}
              >
                SEND A MESSAGE
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
