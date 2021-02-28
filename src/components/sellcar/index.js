import React ,{useContext} from "react";
import { useHistory } from "react-router-dom";
import SELLCAR from "../../assets/images//sellcar.png";
import { FormattedMessage } from "react-intl";
import '../sellcar/style.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {LocalizationContext} from '../../context/LocalizationContext';
const SellCar = () => {
  const [locale, switchLocale] = useContext(LocalizationContext);
  let history = useHistory();

  function handleClick() {
    history.push("/Form");
  }
 
 
 

 
  return (
    <div className='sellcar'>
    
        <div container className='sellcar__wrapper' >
          <div
            className='sellcar__img'
            style={{
              backgroundImage: `url(${SELLCAR})`,
            }}
          >



            <div className='sellcar__TextContiner'>
              <div className={locale=="en"?"sellcar__Title":"sellcar__Title1"} > <FormattedMessage id="background.title" /></div>
              <div className='sellcar__Title2'><FormattedMessage id="background.subtitle" /></div>
  
            </div>

            <div className={locale=="en"?"start_today":"start_today_AR"}>
<button
                className={locale=="en"?"start_btn":"start_btn_AR"}
                onClick={handleClick}
                > 
 <span className="text_btn_start"><FormattedMessage id="background.btn" /> </span> 
  <KeyboardArrowDownIcon className="icon_start"/> </button>
</div>
          </div>
        </div>
     
  
    </div>
    
  );
};
export default SellCar;
