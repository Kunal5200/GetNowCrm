import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import TabPanel from "./tab-panel";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import Tab5 from "./tab5";
import Tab6 from "./tab6";
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
  const tabSection = [
    {
      children: <Tab1 />,
    },
    {
      children: <Tab2 />,
    },
    {
      children: <Tab3 />,
    },
    {
      children: <Tab4 />,
    },
    {
      children: <Tab5 />,
    },
    {
      children: <Tab6 />,
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
        }}
        className="cloudTransparent"
      >
        {tabSection.map((val, i) => (
          <TabPanel index={i} value={value}>
            {val.children}
          </TabPanel>
        ))}
      </Box>
    </div>
  );
};

export default KeyFeatures;
