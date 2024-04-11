import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/index.module.css";
const Solution = () => {
  return (
    <Box className={styles.background}>
      <Box>
        <Typography
          variant="h4"
          color={"#516e90"}
          lineHeight={"1.3em"}
          fontSize={"38px"}
          fontWeight={700}
        >
          Need a solution for both sales and service?
        </Typography>{" "}
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
            CRM, Project Management & Invoicing In One simple System. Want to
            Get Started Right Away? Try SpellCRM 30 days for Free Trial.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: "green",
            color: "#fff",
            mt: 6,
            padding: "15px 30px",
            width: "20%",
            borderRadius: "50px",
          }}
        >
          Request Your Live Demo
        </Button>
      </Box>
    </Box>
  );
};

export default Solution;
