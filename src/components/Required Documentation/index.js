// import React, { useContext, useEffect, useState } from "react";
// import makeStyles from "./style";
// import { useTheme } from "@material-ui/core/styles";
// import { Grid, Typography } from "@material-ui/core";
// import { useMediaQuery, Button } from "@material-ui/core";
// import { FormattedMessage } from "react-intl";

// const RequiredDocumentation = () => {
//   const classes = makeStyles();
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
//   const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  

//   return (
//     <div className={classes.root}>
//         <div className={classes.continer}>
//         <div className={classes.title}>
//         <FormattedMessage id="required.first" />
//         </div> 

//         <div className={classes. details}>
//         <FormattedMessage id="required.third" />
//         </div>


//         <div className={classes.Possession}>
//         <FormattedMessage id="required.fourth.headline" />
// <div className={classes.Possession2} >  <FormattedMessage id="required.fourth.subtitle" /></div>
 
//         </div>
//         <div className={classes.Emirates}>
//         <FormattedMessage id="required.second" />
//         </div>

//     </div>
//     </div>
//   );
// };
// export default RequiredDocumentation;

import React, { useContext } from "react";
import "../../components/Required Documentation/style.scss";
import { useMediaQuery, Button } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { LocalizationContext } from "../../context/LocalizationContext";

const RequiredDocumentation = () => {
  const [locale, switchLocale] = useContext(LocalizationContext);
  return(
    <div className="required">

      <div className="title_Required">
      <FormattedMessage id="required.first" />
      </div>


      <div className= {locale=="en"?"required_documentation":"required_documentation_AR"}>
     
        <span className="text_required"> <FormattedMessage id="required.third" /></span>

        <span > 
         <span className="text_required" ><FormattedMessage id="required.fourth.headline" /></span> 
        <br/>
       <span className="text_required2"><FormattedMessage id="required.fourth.subtitle" /></span> 
        </span>

        <span lassName="text_required">
<FormattedMessage id="required.second" />
        </span>

      </div>

    </div>

  )
}
export default RequiredDocumentation