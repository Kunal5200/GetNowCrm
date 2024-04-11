import React from "react";
import styles from "@/styles/index.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import system from "@/assessts/images/system.png";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const System = () => {
  const data = [
    { label: "Product Set Up" },
    { label: "Campaign Creator" },
    {
      label: "Auto-Responder",
    },
    {
      label: "Landing Page Wizard",
    },
    {
      label: "Merchant Gateways",
    },
    {
      label: "Prospect Management",
    },
    {
      label: "Success Rates Monitoring",
    },
  ];
  const data2 = [
    { label: "Fulfillment Automation" },
    { label: "Chargeback & Fraud " },
    {
      label: "Inventory Management      ",
    },
    {
      label: "Data Analytics",
    },
    {
      label: "Best In Industry Support",
    },
    {
      label: "Responsive webdesign",
    },
    {
      label: "Recurring Billing Option",
    },
  ];
  return (
    <Box className={styles.background}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box>
              <Box>
                <Typography
                  color={"#516e90"}
                  textAlign={"left"}
                  variant="h4"
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  THE ALL IN ONE CRM FOR THOSE WHO ARE SERIOUS ABOUT THEIR
                  BUSINESS.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  textAlign: "start",
                }}
              >
                <Typography
                  variant="h4"
                  color={"#516e90"}
                  lineHeight={"1.3em"}
                  fontSize={"38px"}
                  fontWeight={700}
                >
                  CRM System that makes you unstoppable
                </Typography>{" "}
              </Box>
              <Box
                sx={{
                  mt: 3,
                }}
              >
                <Typography
                  color={"grey"}
                  textAlign={"left"}
                  variant="h6"
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  SpellCRM is the all-in-one platform to fully automate and
                  synchronize your business, & can help you grow up to the same
                  size as those companies that dominate their fields. Empower
                  your Business with all the right tools to Accept Online
                  Payments & provide the Best Customer Experience.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    textAlign: "start",
                  }}
                >
                  <Grid item xs={6}>
                    {data.map((val, id) => {
                      return (
                        <Typography
                          variant="h6"
                          color={"#516e90"}
                          fontSize={"18px"}
                          fontWeight={700}
                          sx={{
                            mb: 2,
                          }}
                        >
                          <TaskAltIcon
                            sx={{
                              marginRight: "8px",
                            }}
                          />{" "}
                          {val.label}
                        </Typography>
                      );
                    })}
                  </Grid>
                  <Grid item xs={6}>
                    {data2.map((val, id) => {
                      return (
                        <Typography
                          variant="h6"
                          color={"#516e90"}
                          fontSize={"18px"}
                          fontWeight={700}
                          sx={{
                            mb: 2,
                          }}
                        >
                          <TaskAltIcon
                            sx={{
                              marginRight: "8px",
                            }}
                          />{" "}
                          {val.label}
                        </Typography>
                      );
                    })}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <img src={system.src} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default System;
