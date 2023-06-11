import { Typography } from "@mui/material";
import React from "react";
import useStyles from "./Styles";
import { SearchField, StyledInputBase } from "./Styles";
import SendButton from "./SendButton";

const FooterHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerHeader}>
      <Typography variant="subtitle1" className={classes.headerTitle}>
        <span>Clearence Sales </span>Up to 70% off. All Sales are Final!
      </Typography>
      <div className={classes.searchField}>
        <SearchField>
          <StyledInputBase
            placeholder="Enter Your Email"
            inputProps={{ "aria-label": "search" }}
          />
          <SendButton />
        </SearchField>
      </div>
    </div>
  );
};

export default FooterHeader;
