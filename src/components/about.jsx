import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import aboutus from "@/assessts/images/about.png";
const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6}>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#516e90",
              fontSize: "50px",
              fontWeight: 500,
            }}
          >
            About Our work
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "grey",
              fontSize: "17px",
              fontWeight: 500,
              mt: 6,
            }}
          >
            SpellCRM is trusted CRM development, Integration & Consulting firms
            in the Direct Response Marketing industry. Our Innovative and
            superior solutions enable our clients to increase their profits and
            efficiencies while managing their online campaigns. Our dedicated
            technical support team work 24/7, to support our clients whenever
            required. We have an Expert team of developers who work hard to
            deliver outstanding service beyond our client's expectations. With
            our flexible, affordable and customized design, content, and
            maintenance solutions we help our clients to provide quality,
            reliable service. We offer CRM, CMS, Web design, & development,
            website security services.
          </Typography>
          <Box>
            <Button
              sx={{
                mt: 3,
                color: "#0083ff",
                border: "2px solid #0083ff",
                padding: "15px 30px",
                width: "40%",
                borderRadius: "30px",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              GET STARTED NOW
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6}>
        <img src={aboutus.src} />
      </Grid>
    </Grid>
  );
};

export default About;
