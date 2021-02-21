import React, { useContext, useEffect, useState } from "react";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery, Button } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const RequiredDocumentation = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  

  return (
    <div className={classes.root}>
        <div className={classes.continer}>
        <div className={classes.title}>
        <FormattedMessage id="required.first" />
        </div> 

        <div className={classes. details}>
        <FormattedMessage id="required.third" />
        </div>


        <div className={classes.Possession}>
        <FormattedMessage id="required.fourth.headline" />
<div className={classes.Possession2} >  <FormattedMessage id="required.fourth.subtitle" /></div>
 
        </div>
        <div className={classes.Emirates}>
        <FormattedMessage id="required.second" />
        </div>

    </div>
    </div>
  );
};
export default RequiredDocumentation;
