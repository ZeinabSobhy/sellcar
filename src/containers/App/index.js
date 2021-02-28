import React, { lazy, Suspense,  } from "react";
import { Route, Switch } from "react-router-dom";
import useStyles from "../App/Style";
import { useIntl } from "react-intl";
import Home from "../Home/index";
import Form from "../../components/Form/index";

import { Backdrop, CircularProgress } from "@material-ui/core";

const App = () => {
  const classes = useStyles();
  const locale = useIntl().locale;
  return (
      
    <Suspense
      fallback={
        <Backdrop className={classes.backdrop} open>
          <CircularProgress />
        </Backdrop>
      }
    >
      <switch> 
          
        <Route exact path="/" component={Home} />
        <Route exact path="/Form" component={Form}/>
      </switch>
    </Suspense>
   
  );
};
export default App;
