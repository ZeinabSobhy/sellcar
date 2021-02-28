
import React, { useContext } from "react";
import { useMediaQuery, Button } from "@material-ui/core";
import "../header/style.scss";
import LOGOEA from "../../assets/images/logo-ea.svg";
import { FormattedMessage } from "react-intl";

import { LocalizationContext } from "../../context/LocalizationContext";
function Header() {
  const [locale, switchLocale] = useContext(LocalizationContext);

  return (
    <div className="header">
     
        
        <div className="logo">
          
          <img src={LOGOEA} alt="logo-ea.svg" />
          
        </div>
        
       <div className="button">
        <button
        
          onClick={() =>
            locale == "en" ? switchLocale("ar") : switchLocale("en")
          }
          className="btn"
        >
          <FormattedMessage id="header.btn" />
        </button>
      </div>
      
    </div>
  );
}

export default Header;
