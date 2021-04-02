
import React, { useContext } from "react";
import { useMediaQuery, Button, colors } from "@material-ui/core";
import "../header/style.scss";
import { FormattedMessage } from "react-intl";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { LocalizationContext } from "../../context/LocalizationContext";


function About() {
  const [locale, switchLocale] = useContext(LocalizationContext);

  return (
    <div>
        <h1 style={{colors:'#e6b800'}}>about</h1>
    </div>
  );
}

export default About;
