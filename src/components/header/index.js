import React, { useContext } from "react";
import { useMediaQuery, Button } from "@material-ui/core";
import "../header/style.scss";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import { useHistory } from "react-router-dom";
import { LocalizationContext } from "../../context/LocalizationContext";

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

function Header() {
  const [locale, switchLocale] = useContext(LocalizationContext);
  let history = useHistory();
  function handleClickAbout() {
    history.push("/about");
  }

  return (
    <div className="continer">
      <Breadcrumbs className="navBar">
        <Link color="inherit" href="/" className="link">
          Home
        </Link>

        <Link
          color="inherit"
          onClick={handleClickAbout}
          className="link"
        >
          About
        </Link>
        <Typography color="textPrimary" className="link">
          Contact
        </Typography>
      </Breadcrumbs>

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
