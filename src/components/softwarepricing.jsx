import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/index.module.css";
const SoftwarePricing = () => {
  const data = [
    {
      heading: "Free- 30 Days",
      price: "$0.00",
      color: "green",
      buttontext: "SIGN UP",
      labels: [
        "Unlimited Users",
        "24/7 Support",
        "Fraud Detection",
        "Fraud Prevention",
        "Affiliate Tracking",
        "Lead Management",
        "Combined Shipping",
        "Bin Detection",
        "Customer Profiles",
        "SMTP",
        "Merchant Payment Gateways",
        "Multi-Channel Sales Tracking",
        "Chargeback & Fraud",
        "Cancel / Refund Transaction",
        "Customize Search Filter",
        "Live Chat Support",
        "Reporting",
        "Developers and API",
        "Product Catalog",
      ],
    },
    {
      heading: "Professional",
      price: "$299",
      color: "blue",
      buttontext: "SIGN UP",
      labels: [
        "Unlimited Users",
        "24/7 Support",
        "Fraud Detection",
        "Fraud Prevention",
        "Affiliate Tracking",
        "Lead Management",
        "Combined Shipping",
        "Bin Detection",
        "Customer Profiles",
        "SMTP",
        "Merchant Payment Gateways",
        "Multi-Channel Sales Tracking",
        "Chargeback & Fraud",
        "Cancel / Refund Transaction",
        "Customize Search Filter",
        "Live Chat Support",
        "Reporting",
        "Developers and API",
        "Product Catalog",
        "Recurrinig Calendar",
        "Shipment Monitoring",
      ],
    },
    {
      heading: "Enterprise",
      price: "$499",
      color: "orange",
      buttontext: "SIGN UP",
      labels: [
        "Unlimited Users",
        "24/7 Support",
        "Fraud Detection",
        "Fraud Prevention",
        "Affiliate Tracking",
        "Lead Management",
        "Combined Shipping",
        "Bin Detection",
        "Customer Profiles",
        "SMTP",
        "Merchant Payment Gateways",
        "Multi-Channel Sales Tracking",
        "Chargeback & Fraud",
        "Cancel / Refund Transaction",
        "Customize Search Filter",
        "Live Chat Support",
        "Reporting",
        "Developers and API",
        "Product Catalog",
        "Recurrinig Calendar",
        "Shipment Monitoring",
        "Customization",
        "Custom Domain",
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: "#0083ff",
        color: "#fff",
        padding: "7rem 0",
      }}
    >
      <Container>
        <Box>
          <Box>
            <Typography
              variant="h1"
              fontSize={"35px"}
              textAlign={"center"}
              fontWeight={500}
            >
              SpellCRM SOFTWARE PRICING
            </Typography>
          </Box>{" "}
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h6"
              fontSize={"18px"}
              textAlign={"center"}
              fontWeight={500}
            >
              Save at Least 50% of Cost Compared to Other CRM Software
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 10,
              textAlign: "center",
            }}
          >
            <Grid container spacing={2}>
              {data.map((val, id) => {
                return (
                  <Grid item xs={4} key={id}>
                    <Box className={styles.pricing_box}>
                      <Box>
                        <Typography
                          variant="h2"
                          fontSize={"26px"}
                          fontWeight={600}
                          color={val.color}
                        >
                          {val.heading}
                        </Typography>
                        <Typography
                          variant="h1"
                          fontSize={"45px"}
                          fontWeight={600}
                          sx={{ mt: 2.5 }}
                        >
                          {val.price}
                        </Typography>
                      </Box>
                      <Box sx={{ my: 5, height: "80%" }}>
                        {val.labels.map((label, index) => (
                          <Typography
                            sx={{ mb: 2 }}
                            key={index}
                            variant="h6"
                            fontSize={"15px"}
                            fontWeight={600}
                          >
                            {label}
                          </Typography>
                        ))}
                      </Box>
                      <Button
                        sx={{
                          color: "#fff",
                          backgroundColor: val.color,
                          padding: "10px 20px",
                          width: "80%",
                          borderRadius: "30px",
                        }}
                      >
                        {val.buttontext}
                      </Button>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SoftwarePricing;
