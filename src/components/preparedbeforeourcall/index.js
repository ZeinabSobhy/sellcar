

import React, { useContext } from "react";
import { useMediaQuery } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import "../preparedbeforeourcall/style.scss";
import { LocalizationContext } from "../../context/LocalizationContext";
import { FormattedMessage, useIntl } from "react-intl";
const Preparedbeforeourcall = () => {
  const [locale, switchLocale] = useContext(LocalizationContext);
  return(
    <div className="root">
      <div className="prepared_title">
        <span className="first_title_prepared"><FormattedMessage id="prepared.headline" /></span>
        <span className="scond_title_prepared"><FormattedMessage id="prepared.subtitle" /></span>
      </div>

      <div className="prepared_list">

      <ul className="list_one">
  <li className="li">
  <Avatar className={locale=="en"?"Circle_list":"Circle_list_AR"}>
  
                     <div></div>
                 </Avatar>
                    <span className="text_prepared" >
                    <FormattedMessage id="prepared.rules.first" />  
                    </span>
  </li>
  <li className="li">
  <Avatar className= {locale=="en"?"Circle_list":"Circle_list_AR"}>
                     <div></div>
                 </Avatar>
                    <span className="text_prepared" >
                   < FormattedMessage id="prepared.rules.second" />  
                    </span>

  </li>

  <li className="li">
  <Avatar className={locale=="en"?"Circle_list":"Circle_list_AR"}>
                     <div></div>
                 </Avatar>
                    <span className="text_prepared" >
                    <FormattedMessage id="prepared.rules.third" />   
                    </span>

  </li>


  <li className="li">
  <Avatar className= {locale=="en"?"Circle_list":"Circle_list_AR"}>
                     <div></div>
                 </Avatar>
                    <span className="text_prepared" >
                    <FormattedMessage id="prepared.rules.fourth" /> 
                    </span>

  </li>
  
</ul> 




<ul className="list_two">
<li className="li">
  <Avatar className= {locale=="en"?"Circle_list":"Circle_list_AR"}>
                     <div></div>
                 </Avatar>
                    <span className="text_prepared" >
                    <FormattedMessage id="prepared.rules.fifth" />
                    </span>

  </li>


 <li className="li">
  <Avatar className= {locale=="en"?"Circle_list":"Circle_list_AR"}>
                     <div></div>
                 </Avatar>
                    <span className="text_prepared" >
                    <FormattedMessage id="prepared.rules.sixth" />
                    </span> 

  </li>

  <li className="li">
  <Avatar className= {locale=="en"?"Circle_list":"Circle_list_AR"}>
                     <div></div>
                 </Avatar>
                    <span className="text_prepared" >
                    <FormattedMessage id="prepared.rules.seventh" />
                    </span> 

  </li>


  <li className="li">
  <Avatar className= {locale=="en"?"Circle_list":"Circle_list_AR"}>
                     <div></div>
                 </Avatar>
                    <span className="text_prepared" >
                    <FormattedMessage id="prepared.rules.eight" />
                    </span> 

  </li>
</ul> 
        </div>

      </div>

 
  );
}
export default Preparedbeforeourcall