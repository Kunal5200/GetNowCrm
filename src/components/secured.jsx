import React from "react";
import lock from "@/icons/lock.png";
import { Box, Typography } from "@mui/material";
import arrow from "@/icons/arrow.png";
import styles from "@/styles/secured.module.css";
const Secured = (props) => {
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <img src={props.img} width={50} />
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 550,
            color: "#6a85a6",
            ":hover": {
              color: "#0083FF",
            },
            mt: 2,
            letterSpacing: 1,
          }}
        >
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: 15, color: "grey", mt: 2 }}>
          {props.description}
        </Typography>
        <img src={arrow.src} width={50} className={styles.arrowIcon} />
      </Box>
    </div>
  );
};

export default Secured;
