import { Stack, Typography } from "@mui/material";
import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CachedIcon from "@mui/icons-material/Cached";
import useStyles from "./Styles";

const BuyingFeatures = () => {
  const classes = useStyles();
  return (
    <div className={classes.buyingFeaturesContainer}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        padding={"0rem 1.5rem 0.5rem 1.5rem"}
      >
        <LocalShippingOutlinedIcon className={classes.featuresButton} />
        <div>
          <Typography children={"Free Delivery"} variant="body1" />
          <Typography
            children={"Enter your postal code for Delivery Availability"}
            variant="body1"
          />
        </div>
      </Stack>
      <hr />

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        sx={{ padding: "1rem 1.5rem 0.5rem 1.5rem" }}
      >
        <CachedIcon className={classes.featuresButton} />
        <div>
          <Typography children={"Return Delivery"} variant="body1" />
          <Typography
            children={"Free 30 Days Delivery Returns. Details"}
            variant="body1"
          />
        </div>
      </Stack>
    </div>
  );
};

export default BuyingFeatures;
