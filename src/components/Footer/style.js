import makeStyles from "@material-ui/core/styles/makeStyles";
export default makeStyles(
  (theme) => ({
    root: {
      width: "726px",
      height: "96px",

      [theme.breakpoints.down("sm")]: {
        margin: "0 0 0 246px",
      },
      [theme.breakpoints.only("xs")]: {
        display: "list-item",
        margin: "0 0 0 0px",
      },
    },

    com1: {
      float: "right",
      margin: "0 10px 0 808px",

      [theme.breakpoints.down("sm")]: {
        margin: "-196 10px 0 808px",
      },
      [theme.breakpoints.only("xs")]: {
        margin: '0px 0 1px 285px',
        padding: '15px 0 0 162px',
      },
    },

    text1: {
      width: "328px",
      height: "42px",
      margin: "30px 0 20px 115px",
      fontFamily: "inherit",
      fontSize: " 16px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "-0.44px",
      color: " #000000",
    },
    continersocial: {
      display: "flex",
      float: "right",
      margin: "0 82px 0 0px",
    },

    social1: {
      margin: " 0 0 0 11px",
    },
    social2: {
      margin: " 0 0 0 11px",
    },
    social3: {
      margin: " 0 0 0 11px",
    },
    social4: {
      margin: " 0 0 0 11px",
    },
    social5: {
      margin: " 0 0 0 11px",
    },

    text2: {
      width: "520px",
      height: "36px",
      margin: "22px 112px 2px 0",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: " normal",
      lineHeight: " 1.29",
      letterSpacing: "normal",
      color: " #595f6f",
    },
    com2: {
      margin: "-126px 7px 0px 197px",
      [theme.breakpoints.down("sm")]: {
        margin: "-196 10px 0 808px",
      },
      [theme.breakpoints.only("xs")]: {
        margin: '54px 0 1px 285px',
      },


     
    },
  }),
  { index: 1 }
);
