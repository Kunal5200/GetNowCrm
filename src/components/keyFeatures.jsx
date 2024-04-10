import React, { useState } from "react";
import { Tabs, Tab, Grid, Box, Typography } from "@mui/material";
import TabPanel from "./tab-panel";
import backgroundCloud from "@/backgroundImages/cloudTransparent.png";
import dial from "@/backgroundImages/dial.svg";
import Tab1 from "./tab1";
const KeyFeatures = () => {
  const tabs = [
    {
      label: 1,
    },
    {
      label: 2,
    },
    {
      label: 3,
    },
    {
      label: 4,
    },
    {
      label: 5,
    },
    {
      label: 6,
    },
  ];
  const [value, setValue] = useState(0);
  const tabChangeHandler = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs onChange={tabChangeHandler} value={value}>
        {tabs.map((val, i) => (
          <Tab
            label={val.label}
            key={i}
            sx={{
              border: "1px solid #B2DAFF",
              borderRadius: "50%",
              minWidth: 65,
              marginRight: 5,
              backgroundColor: "#B2DAFF",
              color: "#fff",
              fontWeight: 700,
              fontSize: 30,
              "&.Mui-selected": {
                backgroundColor: "#0083FF",
                borderBottom: "none",
                color: "#fff",
              },
              "&.Mui .MuiTabs-indicator": {
                backgroundColor: "#fff",
              },
            }}
          />
        ))}
      </Tabs>
      <Box
        sx={{
          mt: 4,
          backgroundImage: `url(${backgroundCloud})`,
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TabPanel index={0} value={value}>
          <Tab1 />
        </TabPanel>
      </Box>
    </div>
  );
};

export default KeyFeatures;
