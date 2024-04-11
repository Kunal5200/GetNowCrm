import fees from "@/backgroundImages/fees.svg";
import { Done } from "@mui/icons-material";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Tab6 = () => {
  const text = [
    {
      label: "transaction fee (successful and declined),",
    },
    {
      label: "refund fee,",
    },
    {
      label: "chargeback fee,",
    },
    {
      label: "reserve",
    },
  ];
  const text2 = [
    {
      label: "Setup fee",
    },
    {
      label: "Monthly fee,",
    },
    {
      label: "processing fee,",
    },
    {
      label: "Any other fees",
    },
  ];
  return (
    <div>
      <Box>
        <Grid container spacing={4} mt={4}>
          <Grid item lg={4} textAlign={"center"}>
            <img src={fees.src} width={200} />
          </Grid>
          <Grid item lg={8}>
            <Typography fontSize={24} color={"#516E90"} fontWeight={700} mb={3}>
              Fees
            </Typography>
            <Grid container spacing={4}>
              <Grid item lg={6}>
                <Typography fontSize={16} color={"#757575"}>
                  Not true in payment processing. You HAVE TO know in advance
                  the entire fee structure. Moreover, you also have to
                  understand it. Having said that, fees have to be simple and
                  clear.
                </Typography>
                <List
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#6987AB",
                      fontWeight: 700,
                    },
                  }}
                >
                  {text.map((val, i) => (
                    <ListItem disablePadding key={i}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <Done sx={{ fontSize: 14, fill: "#008000" }} />
                      </ListItemIcon>
                      <ListItemText primary={val.label} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item lg={6}>
                <Typography fontSize={16} color={"#757575"}>
                  Investigationes demonstraverunt lectores legere me lius quod
                  ii legunt saepius.
                </Typography>
                <List
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#6987AB",
                      fontWeight: 700,
                    },
                  }}
                >
                  {text2.map((val, i) => (
                    <ListItem disablePadding key={i}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <Done sx={{ fontSize: 14, fill: "#008000" }} />
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

export default Tab6;
