import React, { useContext, useEffect, useState } from "react";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import LOGOEA from "../../assets/images/logo-ea.svg";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery, Button } from "@material-ui/core";
import { LocalizationContext } from "../../context/LocalizationContext";
import { FormattedMessage } from "react-intl";
import FEC_ICON from '../../assets/icons/facebook.png';
import GOOLE_ICON from '../../assets/icons/goole.png';
import insta_ICon from '../../assets/icons/instagram.png';
import Twiter_icon from '../../assets/icons/twitter-light.png';
import YOUTUBE_ICON from '../../assets/icons/youtube-light.png';
import LOGO from '../../assets//images//logo.png';

const Footer = () => {
  const classes = makeStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [locale, switchLocale] = useContext(LocalizationContext);

  return (
      <Grid container  item xs={12} sm={6} lg={6} className={classes.root}>
          <Grid  container className={classes.com1} >
              <div >
                  <Typography className={classes.text1}>
				  <FormattedMessage id="footer.social" />
                  </Typography>
                  <div className={classes.continersocial}>
                      <div className={classes.social1}>
                                           <a
											target="_blank"
											href="https://www.facebook.com/emiratesauction/"
										>
											<img
												style={{
													// marginInlineEnd: '12px',
													cursor: 'pointer',
													// width: isSmallScreen && '46px',
													// height: isSmallScreen && '46px',
												}}
												src={ FEC_ICON }
												alt="facebook"
											/>
										</a>
                                        </div>
                                        
                                        <div className={classes.social2}>
                                        <a
											target="_blank"
											href="https://twitter.com/emiratesauction"
										>
											<img
												style={{
													// marginInlineEnd: '12px',
													cursor: 'pointer',
													// width: isSmallScreen && '46px',
													// height: isSmallScreen && '46px',
												}}
												src={Twiter_icon}
												alt="twiter"
											/>
										</a>
                                            

                                        </div>


                                        <div className={classes.social3}>
                                        <a
											target="_blank"
											href="https://www.youtube.com/user/emiratesauction"
										>
											<img
												style={{
													// marginInlineEnd: '12px',
													cursor: 'pointer',
													// width: isSmallScreen && '46px',
													// height: isSmallScreen && '46px',
												}}
												src={YOUTUBE_ICON}
												alt="YOUTUBE"
											/>
										</a>
                                            

                                        </div>

                                        <div className={classes.social4}>
                                        <a
											target="_blank"
											href="https://www.instagram.com/emiratesauction/"
										>
											<img
												style={{
													// marginInlineEnd: '12px',
													cursor: 'pointer',
													// width: isSmallScreen && '46px',
													// height: isSmallScreen && '46px',
												}}
												src={insta_ICon}
												alt="insta"
											/>
										</a>
                                            

                                        </div>
                                        <div className={classes.social5}>
                                        <a
											target="_blank"
											href="https://www.instagram.com/emiratesauction/"
										>
											<img
												style={{
													// marginInlineEnd: '12px',
													cursor: 'pointer',
													// width: isSmallScreen && '46px',
													// height: isSmallScreen && '46px',
												}}
												src={ GOOLE_ICON}
												alt=" GOOLE"
											/>
										</a>
                                       
                                            

                                        </div>




                  </div>
                  
              
              </div>

          </Grid>

          <Grid  container  item xs={12} sm={6} lg={6}>
              <div className={classes.com2}>
              <div className={classes.logoea}>
            <img
              style={{
                cursor: "pointer",
                // width: isSmallScreen && "242px",
                // height: isSmallScreen && "75px",
              }}
              src={LOGOEA}
              alt="LOGO"
            />
          </div>
          <div className={classes.text2}>
		  <FormattedMessage id="footer.subtitle" />
              

          </div>

              </div>

          </Grid>

      </Grid>
   
  );
};
export default Footer;
