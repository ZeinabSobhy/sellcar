import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "./style";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { FormattedMessage, useIntl } from "react-intl";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const Preparedbeforeourcall = () => {
    const classes = makeStyles();
    const theme = useTheme();
    const [spacing, setSpacing] = React.useState(1);
    const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const isXSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));


    return (
        <Grid container className={classes.root}>
            <Grid container  item sm={isSmallScreen ? '6' : '12'}>
            <Grid container  item xs={isXSmallScreen ? '12' :'6'}>
            <div className={classes.title}>
                <Typography className={classes.firstTitle}><FormattedMessage id="prepared.headline" /> 
                    </Typography>
                <Typography className={classes.scondTitle}><FormattedMessage id="prepared.subtitle" />   </Typography>
            </div>
    <Grid container item sm={6} xs={12}className={classes.continerone} spacing={3}>
               
     
         <Grid item sm={6} xs={12}  >

        <div className={classes.culem1}>
                <div    >
                <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text1}>
                   <FormattedMessage id="prepared.rules.first" />  
                   
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes.Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text2}>
                   <FormattedMessage id="prepared.rules.second" /> 
                  
                   </Typography>
                   </div>

                   <div>
                <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text3}>
                   <FormattedMessage id="prepared.rules.third" /> 
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text4}>
                   <FormattedMessage id="prepared.rules.fourth" /> 
                   </Typography>
                   </div>
                   </div>
        </Grid>
                 



                   <Grid  item sm={6} xs={12} >
                       <div className={classes.culem2}>
                       
                   <div>
                <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text5}>
                   {/* <FormattedMessage id="howItWorks.secondPoint.title" />   */}
                   <FormattedMessage id="prepared.rules.fifth" />
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes.Circle2}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text6}>
                   {/* <FormattedMessage id="howItWorks.secondPoint.subtitle" />  */}
                   <FormattedMessage id="prepared.rules.sixth" />
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes. Circle3}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text7}>
                   <FormattedMessage id="prepared.rules.seventh" />
                   </Typography>
                   </div>

                   <div>
                   <Avatar className={classes. Circle}>
                 <div></div>
                 </Avatar>
                   <Typography className={classes.text8}>
                   <FormattedMessage id="prepared.rules.eight" />
                   </Typography>
                   </div>
                   </div>
                  




                   </Grid>
                 
         
     
               
           
            </Grid>
           


       
        
        </Grid>
        </Grid> 
         </Grid>


    );
    
   
    
   










};
export default Preparedbeforeourcall;

