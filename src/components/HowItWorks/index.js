// import React ,{useContext} from "react";
// import IMGRED from "../../assets/images//red-bg.png";
// import BID_ICON from "../../assets/icons/bid-icon.png";
// import Avatar from '@material-ui/core/Avatar';
// import { FormattedMessage } from "react-intl";
// import { Typography } from '@material-ui/core';
// import { LocalizationContext } from "../../context/LocalizationContext";
// import "../HowItWorks/Style.scss"

// const HowItWorks = () => {
//

//     <div className="Howtowork">
//       <div className="howtowork_wrapper">

//         <div
//             className="paper2"
//             style={{
//               backgroundColor: "#323e47",

//             }}
//           >

//               <div  className="containerTitle">

//                 <Typography className="title">
//                 <FormattedMessage id="howItWorks.title" /></Typography>
//                 <Typography className="Secondtitle">
//                 <FormattedMessage id="howItWorks.subtitle" />
//                 </Typography>
//               </div>
//               <div  >
//               <div  className={locale=="en"?"containerSteps":"containerSteps2"}>

//                 <div className="StepOne">

//           <Avatar className="NumberCircle1">
//            <div>1</div>
//           </Avatar>

//                   <Typography className={locale=="en"?"textStepOne":"textStepOne2"}>
//                   <FormattedMessage id="howItWorks.firstPoint.title" />
//                   </Typography>
//                   <Typography className={locale=="en"?"textStep1":"textStep12"}>
//                   <FormattedMessage id="howItWorks.firstPoint.subtitle" />
//                   </Typography>
//                 </div>

//                 <div  >

//                <Avatar className= "NumberCircle">
//                 <div>2</div>
//                 </Avatar>
//         <div className="containersteptwo">
//                   <Typography  className={locale=="en"?"textSteptwo":"textSteptwo2"}>
//                   <FormattedMessage id="howItWorks.secondPoint.title" />
//                   </Typography>
//                   <Typography  className={locale=="en"?"textStep2":"textStep22"}>
//                   <FormattedMessage id="howItWorks.secondPoint.subtitle" />
//                   </Typography>
//                   </div>
//                 </div>
//                 <div  className="Stepthird">

//           <Avatar className="NumberCircle">
//            <div>3</div>
//           </Avatar>
//           <div className="containersteptwo">

//                   <Typography className="textStepthird">
//                   <FormattedMessage id="howItWorks.thirdPoint.title" />
//                   </Typography>
//                   <Typography className="textStep3">
//                   <FormattedMessage id="howItWorks.thirdPoint.subtitle" />

//                   </Typography>
//                   <Typography className="textStepthird2">
//                   <FormattedMessage id="howItWorks.thirdPoint.subtitle2" /></Typography>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div direction="column" container>

//         <div
//             className="paper"
//             style={{
//               backgroundImage: `url(${IMGRED})`,

//             }}
//           >
//             <div className="ContainerBidandText">
//               <div className="BidIcon">
//                 <img
//                   style={{

//                   }}
//                   src={BID_ICON}
//                   alt="BidIcon"
//                 />
//               </div>
//               <Typography className="containerText">
//                 <Typography className="firsttext">
//                 <FormattedMessage id="bidding.title" />
//                 </Typography>
//                 <Typography classNam="Secondtext">
//                 <FormattedMessage id="bidding.subtitle" />{" "}
//                 </Typography>
//               </Typography>
//             </div>

//           </div>

//         </div>

//       </div>
//       </div>

//   );
// };
// export default HowItWorks;

import React, { useContext } from "react";
import IMGRED from "../../assets/images/red-bg.png";
import BID_ICON from "../../assets/icons/bid-icon.png";
import Avatar from "@material-ui/core/Avatar";
import { FormattedMessage } from "react-intl";
import { Typography } from "@material-ui/core";
import { LocalizationContext } from "../../context/LocalizationContext";
import "../HowItWorks/Style.scss";

const HowItWorks = () => {
  const [locale, switchLocale] = useContext(LocalizationContext);

  return (
    <div className="Howtowork">

      <div className="paper2">
        <div className={locale=="en"?"continer_howtowork":"continer_howtowork_AR"}>
        

<div className={locale=="en"?"continer_title":"continer_title_AR"}>

        <span className="title" > <FormattedMessage id="howItWorks.title" /></span>
        <span className="subtitle"> <FormattedMessage id="howItWorks.subtitle" /></span>
        </div>
       <ul className="list">

           <li  className="li1"> 
           <Avatar className={locale=="en"?"NumberCircle1":"NumberCircleAR"}>
          
          <span>1</span>
         </Avatar>
            <span className="title_steps "><FormattedMessage id="howItWorks.firstPoint.title" /></span> 
          <span className="suptitle_steps"> <FormattedMessage id="howItWorks.firstPoint.subtitle" /></span> 
           </li>
           
            <li className="li1"
            >
              <Avatar className={locale=="en"?"NumberCircle1":"NumberCircleAR"}>
          <span>2</span>
         </Avatar>
              <span className="title_steps ">
         <FormattedMessage id="howItWorks.secondPoint.title" />
         </span>
         <span className="suptitle_steps">
         <FormattedMessage id="howItWorks.secondPoint.subtitle" />
         </span>
            </li>

            <li className="li1"
            >
              <Avatar className={locale=="en"?"NumberCircle1":"NumberCircleAR"}>
          <span>3</span>
         </Avatar>
              <span className="title_steps ">
              <FormattedMessage id="howItWorks.thirdPoint.title" />
         </span>
         <span className="suptitle_steps">
         <FormattedMessage id="howItWorks.thirdPoint.subtitle" />
         <br/>
         <FormattedMessage id="howItWorks.thirdPoint.subtitle2" />
         </span>
            </li>
        </ul>  
        </div>
      </div>


      <div
        className="paper"
      > 
      <div className= {locale=="en"?"continer_paper":"continer_paper_AR"}>
     
      <div className="BidIcon">
                 <img
                  src={BID_ICON}
                  alt="BidIcon"
                />
              </div>
              <div className="title_paper">
          
                 <span className="bidding_title"><FormattedMessage id="bidding.title" /></span>
               <span className="bidding_subtitle"><FormattedMessage id="bidding.subtitle" />{" "}</span> 
              

              </div>
              </div>
      </div>

    </div>
  );
};
export default HowItWorks;
