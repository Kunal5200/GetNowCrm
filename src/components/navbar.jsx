import React from "react";
import { Box, Card, Container, Typography, Stack } from "@mui/material";
import Link from "next/link";
import { routes } from "@/assessts/routes";
import { Search } from "@mui/icons-material";
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
          <Box>
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              {routes.map((val, i) => (
                <Link href={val.url} key={i} className="link">
                  <Typography
                    color={"#6a85a6"}
                    sx={{
                      ":hover": {
                        color: "#ACD7FF",
                      },
                      fontSize: 16,
                      fontWeight: 550,
                    }}
                  >
                    {val.label}
                  </Typography>
                </Link>
              ))}
              <Search />
            </Stack>
          </Box>
        </Container>
      </Card>
    </div>
  );
};

export default Navbar;
