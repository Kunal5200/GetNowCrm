import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import processing from "@/backgroundImages/processing.svg";
import { Done } from "@mui/icons-material";
const Tab2 = () => {
  const list1 = [
    {
      label: "Multilanguage checkout",
    },
    {
      label: "one click upsells",
    },
    {
      label: "Xsales",
    },
  ];
  const list2 = [
    {
      label: "No-redirection to other parties",
    },
    {
      label: "Lack of transparency",
    },
    {
      label: "Lack of Transparency",
    },
  ];
  return (
    <div>
      <Box>
        <Grid container spacing={4} mt={4}>
          <Grid item lg={4} textAlign={"center"}>
            <img src={processing.src} width={200} />
          </Grid>
          <Grid item lg={8}>
            <Typography fontSize={24} color={"#516E90"} fontWeight={700} mb={3}>
              Processing Options
            </Typography>
            <Typography fontSize={16} color={"#757575"}>
              The way a payment form looks like may decide not only upon your
              conversion rate but also it will create lower or higher trust from
              your buyers. Check if the provider offers you an embedded custom
              form to keep your users always on your website (no-redirection to
              other parties’ website will result in significantly higher
              conversion).
            </Typography>
            <Grid container mt={4}>
              <Grid item lg={6} p={2}>
                <List
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#6987AB",
                      fontWeight: 700,
                    },
                  }}
                >
                  {list1.map((val, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemIcon sx={{ minWidth: 20 }}>
                        <Done sx={{ fill: "#008000", fontSize: 14 }} />
                      </ListItemIcon>
                      <ListItemText primary={val.label} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item lg={6} p={2}>
                <List
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#6987AB",
                      fontWeight: 700,
                    },
                  }}
                >
                  {list2.map((val, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemIcon sx={{ minWidth: 20 }}>
                        <Done sx={{ fill: "#008000", fontSize: 14 }} />
                      </ListItemIcon>
                      <ListItemText primary={val.label} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Tab2;
