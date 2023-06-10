import React from "react";
import { Stack } from "@mui/system";
import useStyles from "./Styles";
import {Typography } from "@mui/material";

const Feature = ({ icon, title, description }) => {
    const classes = useStyles()
  return (
    <Stack className={classes.featureContainer}  direction={"row"} spacing={3} alignItems={"center"} >
      <Stack alignItems={"center"} justifyContent={"center"} className={classes.icon} >{icon}</Stack>
      <Stack>
        <Typography className={classes.featureTitle}>{title}</Typography>
        <Typography variant="body1" className={classes.featureDescription} >{description}</Typography>
      </Stack>
    </Stack>
  );
};

export default Feature;
