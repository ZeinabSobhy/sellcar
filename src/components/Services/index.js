

import React, { useContext } from "react";
import '../../components/Services/Style.scss';
import { useMediaQuery } from "@material-ui/core";
import { FormattedMessage, useIntl } from "react-intl";
import DOCUMENT_ICON from '../../assets/icons/document.png';
import STAR_ICON from '../../assets//icons//Star.png';
import CLOCK_ICON from '../../assets//icons/clock.png';
import { LocalizationContext } from "../../context/LocalizationContext";

const Services = () => {
    
  const [locale, switchLocale] = useContext(LocalizationContext);
    return (
      <div className="services">
<div className="root">
        <div className="title_services">
        <span className="first_title_serv"> <FormattedMessage id="services.headline" /></span>
       <span className={locale=="en"?"subtitle_title_serv":"subtitle_title_serv_AR"}> <FormattedMessage id="services.subtitle" /></span>
       
       <span className="subtitle2_title_serv" ><FormattedMessage id="services.subtitle2" /></span>
        </div >



        <div className={locale=="en"?"continer_services":"continer_services_AR"}>
        
<div className="services_one">
<div className={locale=="en"?"documentIcon":"documentIcon_AR"}>
               <img
                  src={DOCUMENT_ICON}
                  alt="document"
                />
              </div>
              <div className={locale=="en"?"textone":"textone_AR"}>
              
                <span className="titleEasy"> <FormattedMessage id="services.firstCard.headline" /></span>
                <br/>
               <span className="texthelp"><FormattedMessage id="services.firstCard.subtitle" /> </span>

           </div>
</div>


<div className="services_one">

            <div className={locale=="en"?"documentIcon":"documentIcon_AR"}>
                 <img
                  src={STAR_ICON}
                  alt="star"
                />
              </div>
               <div className={locale=="en"?"textone":"textone_AR"}>
               <span className="titleEasy"><FormattedMessage id="services.secondCard.headline" /></span>
               <br/>
               <span className="texthelp"><FormattedMessage id="services.secondCard.subtitle" /></span>

           </div>
           </div>


           <div className="services_one">
           <div className={locale=="en"?"documentIcon":"documentIcon_AR"}>
           
                 <img
                  src={CLOCK_ICON }
                  alt="clock"
                />
              </div>
              <div className={locale=="en"?"textone":"textone_AR"}>
               <span className="titleEasy"> <FormattedMessage id="services.thirdCard.headline" /></span>
               <br/>
               <span className="texthelp"><FormattedMessage id="services.thirdCard.subtitle" /></span>

           </div>

           </div>

</div>
       

      </div>
      </div>




    )





};
export default Services;