import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";
const Navbar = () => {
  return (
    <div>
      <Card sx={{ borderRadius: 0 }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <Box>
            <Typography
              variant="h1"
              fontSize={25}
              sx={{
                fontStyle: "italic",
                background: " rgb(0,40,104)",
                background:
                  "linear-gradient(90deg, rgba(0,40,104,1) 27%, rgba(191,10,48,1) 100%)",
                backgroundClip: "text",
              }}
            >
              GetNow CRM
            </Typography>
          </Box>
          <Box>1</Box>
        </Container>
      </Card>
    </div>
  );
};

export default Navbar;
