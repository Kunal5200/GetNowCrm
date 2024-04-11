import dial from "@/backgroundImages/dial.svg";
import { Done } from "@mui/icons-material";
import {
  Grid,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const Tab1 = () => {
  const listItems = [
    {
      label: "Affordable",
    },
    {
      label: "Flexible",
    },
    {
      label: "Scalable",
    },
    {
      label: "Customizable",
    },
    {
      label: "Reliable",
    },
    {
      label: "All in One Dashboard",
    },
  ];
  return (
    <div>
      <Grid container spacing={4} mt={4}>
        <Grid item lg={4} textAlign={"center"}>
          <img src={dial.src} width={200} />
        </Grid>
        <Grid item lg={8}>
          <Typography
            variant="h1"
            color="#516E90"
            fontSize={24}
            letterSpacing={1.4}
            fontWeight={600}
          >
            Flexibility
          </Typography>
          <Grid container mt={5} columnSpacing={3}>
            <Grid item lg={7}>
              <Typography fontSize={15} color="#757575">
                These days everyone seems to talk about it but only few
                understand it well and actually deliver it. Can your payment
                gateway adapt to specific needs of your business? Can they adapt
                to your programming language? Can they process worldwide in all
                the currencies you need for your business? The platform should
                allow you to create any business model and any payment scenario
                you can come up with. Also the integration possibilities should
                be limitless.
              </Typography>
            </Grid>
            <Grid item lg={5}>
              <List sx={{ padding: 0 }}>
                {listItems.map((val, i) => (
                  <ListItem key={i} disablePadding>
                    <ListItemIcon sx={{minWidth:20,textAlign:"center"}}>
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
    </div>
  );
};

export default Tab1;
