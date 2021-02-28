


import React, { useContext} from "react";
import LOGOEA from "../../assets/images/logo-ea.svg";
import { useMediaQuery, Button } from "@material-ui/core";
import { LocalizationContext } from "../../context/LocalizationContext";
import { FormattedMessage } from "react-intl";
import FEC_ICON from '../../assets/icons/facebook.png';
import GOOLE_ICON from '../../assets/icons/goole.png';
import insta_ICon from '../../assets/icons/instagram.png';
import Twiter_icon from '../../assets/icons/twitter-light.png';
import YOUTUBE_ICON from '../../assets/icons/youtube-light.png';
import "../../components/Footer/style.scss";
import LOGO from '../../assets//images//logo.png';

const Footer = () => {
	  const [locale, switchLocale] = useContext(LocalizationContext);

	  return(
		  <div className="footer">
			  

			  <div className="icon_footer">
				  <div className="title_icon">
				  <FormattedMessage id="footer.social" />
				  </div>
				  <div className="icon">
				  <div className="social1">
                                           <a
											target="_blank"
											href="https://www.facebook.com/emiratesauction/"
										>
											<img
												style={{
													
													cursor: 'pointer',
													
												}}
												src={ FEC_ICON }
												alt="facebook"
											/>
										</a>
                                        </div>
                                        
                                        <div className="social1">
                                        <a
											target="_blank"
											href="https://twitter.com/emiratesauction"
										>
											<img
												style={{
													
													cursor: 'pointer',
													
												}}
												src={Twiter_icon}
												alt="twiter"
											/>
										</a>
                                            

                                        </div>


                                        <div className="social1">
                                        <a
											target="_blank"
											href="https://www.youtube.com/user/emiratesauction"
										>
											<img
												style={{
													
													cursor: 'pointer',
												
												}}
												src={YOUTUBE_ICON}
												alt="YOUTUBE"
											/>
										</a>
                                            

                                        </div>

                                        <div className="social1">
                                        <a
											target="_blank"
											href="https://www.instagram.com/emiratesauction/"
										>
											<img
												style={{
													
													cursor: 'pointer',
													
												}}
												src={insta_ICon}
												alt="insta"
											/>
										</a>
                                            

                                        </div>
                                        <div className="social1">
                                        <a
											target="_blank"
											href="https://www.instagram.com/emiratesauction/"
										>
											<img
												style={{
												
													cursor: 'pointer',
													
												}}
												src={ GOOLE_ICON}
												alt=" GOOLE"
											/>
										</a>
                                       
                                            

                                        </div>


				  </div>

			  </div>

			  <div className="logo_footer">
			  <div className="logoea2">
            <img
              style={{
                cursor: "pointer",
               
              }}
              src={LOGOEA}
              alt="LOGO"
            />
          </div>
          <div className="text2">
		  <FormattedMessage id="footer.subtitle" />
              

          </div>
			  </div>

		  </div>
	  )
}
export default Footer