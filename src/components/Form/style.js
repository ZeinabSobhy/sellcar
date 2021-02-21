import makeStyles from '@material-ui/core/styles/makeStyles';
export default makeStyles((theme) => ({
    roott: {
      height: '100vh !important',
      padding: '0px 0 0 0px !important',
      marginTop: '-251px',
      display:'flix !important',
      objectFit: "contain",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      width:'100%',
    },
    title:{
      [theme.breakpoints.down("xs")]: {
   
        marginLeft: '-214px',
        padding:' 50px 0 0 0',
       },
       [theme.breakpoints.only("sm")]: {
        padding:' 33px 0 0 300px',
      
    }

    },

    firstTitle:{
 width: '175px',
  height: '46px',
  marginTop: '137px',
    marginLeft: '633px',
  fontFamily: 'initial',
  fontSize: '35px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight:' normal',
  letterSpacing: '-0.73px',
  textAlign: 'center',
  color: '#000000',
  [theme.breakpoints.down("xs")]: {
  //   width: '175px',
  // height: '46px',
  padding:'210px 0 0 0px',
  // margin: '0 95px 10px;',
  fontFamily: 'initial',
  fontSize: '35px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight:' normal',
  letterSpacing: '-0.73px',
  textAlign: 'center !important',
  color: '#000000',
        
      },

    },
    scondTitle:{
        width: '365px',
  height:' 28px',
  margin: '10px 388px 50px 554px',
  fontFamily: 'initial',
  fontSize: '18px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.56',
  letterSpacing: '-0.45px',
  textAlign: 'center',
  color: '#595f6f',

    },
    continerVideoForm:{
        marginTop: '284px',
        position: 'absolute',
        margin: theme.spacing(10),

    },
    video: {
      backgroundColor: '#ffffff',
       padding: '0 0px 73px 133px',
       paddingTop: '0px',
       width:' 560px',
       height: '330px',
    
       [theme.breakpoints.down("xs")]: {
        width: '560px',
        height: '780px',
        padding: '4px 194px',
        
       },
       [theme.breakpoints.only("sm")]: {
        backgroundColor: '#ffffff',
        padding: '0 0px 73px 221px',
        paddingTop: '0px',
        width:' 560px',
        height: '330px',
    }},
      zeinab:{
        width: '510',
        height: '50px',
        margin: '49px -9px 0',
        padding: '15px 33px 14px 30px',
        borderRadius: '5px',
        border: 'solid 1px #bfc4ce',
        backgroundColor: '#ffffff',
       },
       fullname:{
        width: '154px',
        height:' 21px',
        margin: '0 328px -3px 0px',
        fontFamily: 'inherit',
        fontSize:' 16px',
        fontWeight: 'normal',
        letterSpacing: 'normal',
        color: '#595f6f',

       },
       PhoneNumber:{
        width: '154px',
        height:' 21px',
        margin: '0 328px -3px 0px !important',
        margintop: '20px !important',
        fontFamily: 'inherit',
        fontSize:' 16px',
        fontWeight: 'normal',
        letterSpacing: 'normal',
        color: '#595f6f',

       },
    sellcarwithus:{
      width: '458px',
      height: '37px',
      margin: '40px 56px 10px 0',
      fontFamily: 'systemUi',
      fontSize: '26px',
      fontWeight: 'bold',
      fontStretch: 'normal',
      fontStyle:' normal',
      lineHeight: 'normal',
      letterSpacing: '-0.58px',
      color:' #000000',

     },
     support:{
      width: '272px',
      height: '24px',
      margin: '10px 233px 30px 0',
      fontFamily:' Roboto',
      fontSize: '18px',
      fontweight: '500',
      fontStretch: 'normal',
      fontStyle:' normal',
      lineHeight: 'normal',
      letterSpacing:' -0.37px',
      color: '#595f6f',

     },
     process:{
      width: '505px',
      height: '42px',
      margin: '-3 0 20px',
      fontFamily:' Roboto',
      fontweight: '16px',
      fontweight: 'normal',
      fontStretch: 'normal',
      fontStyle:' normal',
      lineHeight: 'normal',
      letterSpacing:' -0.33px',
      color: '#595f6f',

     },
     Ready:{
      width: '154px',
      height: '21px',
      margin: '20px 351px 0 0',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: '500',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '-0.33px',
      color: '#595f6f',
     },

    paper: {
      margin: theme.spacing(8, 4),
      float: 'right',
      flexDirection: 'column',
      alignItems: 'center',
    },
    details:{
        width: '156px !important',
        height: '26px !important',
        marginTop: '-3px!important',
        fontFamily: 'Roboto',
        fontSize: '20px !important',
        fontWeight: '500 !important',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.71px',
        color:' #595f6f !important',
    },
    contactInfo:{
      width:' 231px',
  height:' 26px',
  margin: '30px 229px 30px 0',
  fontFamily: 'fangsong',
  fontSize: '20px',
  fontWeight:' 500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  // letterSpacing: '-0.71px',
  color: '#595f6f',

    },
   
  
    form: {
      width: '510px', 
      marginTop: '-473px',
      paddingLeft: '532px',
      [theme.breakpoints.down("xs")]: {
        padding: '261px 6px 0 222px',
       },
       [theme.breakpoints.only("sm")]: {
        marginLeft: '660px',
      
    }
      

    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      display: 'flex',
      variant:"outlined",
    },
    submit: {
      width:' 203px',
      height: '50px',
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#ec1c24 !important",
      color: "#fff !important",
      boxShadow: "0 2px 7px 0 rgba(255, 0, 0, 0.19)!important",
      "&:hover": {
        backgroundColor: "#ec1c24 !important",
        color: "#fff !important"}
    },





    rectangle : {
      width:'321px',
      height: '546px',
      margin: '-404px 0 18px 7px',
      padding: '100px 67px 0 971px',
      // boxShadow: '20px 20px 80px 0 rgba(2, 8, 22, 0.1)',
  backgroundColor: '#ffffff',
      left: '140%',
      // position: 'absolute',
      top: '-9%',
      [theme.breakpoints.only('xs')]: {
        margin: '-118px -72px 0 -608px',
      },
  },
      been_able:{
          width: '296px',
          height: '78px',
          margin: '16px 0 20px',
          fontFamily: 'Roboto',
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.63',
  letterSpacing: '-0.33px',
  textAlign: 'center',
  color: '#595f6f'
      },
      again_arrow:{
          width: '97px',
          height: '16px',
          objectFit: 'contain',
          marginLeft: '-13%'
      },
  error_div:{
      width: '460px',
      height: '494px',
      margin: '50px 0 49px 7px',
      padding: '100px 82px',
      boxShadow: '20px 20px 80px 0 rgba(2, 8, 22, 0.1)',
  backgroundColor: '#ffffff',
      left: '140%',
      // position: 'absolute',
      top: '-9%',
      [theme.breakpoints.only('xs')]: {
          position: 'revert',
      },
  },
      try_btn:{
          width: '137px',
          height: '50px',
          margin: '50px 79px 0 80px',
          padding: '15px 4px 13px 53px',
          borderRadius: '5px',
  boxShadow: '20px 20px 60px 0 rgba(0, 0, 0, 0.4)',
  backgroundColor: '#ec1c24',
          '&:hover': {
              backgroundColor: '#ec1c24',
          },
      },
      try_txt:{
      whiteSpace: 'nowrap',
          width: '69px',
          height: '16px',
          fontFamily: 'Roboto',
  fontSize: '16px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1',
  letterSpacing: 'normal',
  color:'#ffffff',
      },
      went_wrong:{
          width: '204px',
          height: '26px',
          margin: '20px 45.5px 20px 46.5px',
          fontFamily: 'Roboto',
  fontSize: '20px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.42px',
  textAlign: 'center',
  color: '#000000',
      },
      error:{
          width: '81px',
          height: '70px',
          margin: '-20px 117px 1px',
          padding: '0px',
          objectFit: 'contain',
          color:'#ec1c24',
      },
  done:{
      width: '50px',
      height: '50px',
      margin: '0 138px 20px',
      objectFit: 'contain'
  },
      your_inquiry:{
          width: '191px',
          height: '52px',
          margin: '20px 67px 20px 68px',
          fontFamily: 'Roboto',
  fontSize:' 20px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.42px',
  textAlign: 'center',
  color: '#000000'
      },
  msg_sent:{
      width: '326px',
      height: '104px',
      margin: '20px 0 50px',
      fontFamily: 'Roboto',
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.63',
  letterSpacing: '-0.33px',
  textAlign: 'center',
  color:'#595f6f'
  },
  send_another_btn:{
      width: '207px',
      height: '50px',
      margin: '0px 57px 0px 58px',
      padding: '12px 15px 19px 56px',
      borderRadius: '5px',
  boxShadow: '20px 20px 60px 0 rgba(0, 0, 0, 0.4)',
  backgroundColor: '#ec1c24',
      '&:hover': {
          backgroundColor: '#ec1c24',
      },
  }    ,
      whiteArrow:{
          width: '100px',
          height: '20px',
          objectFit: 'contain',
          marginLeft:'-16px',
      },
  send_another_txt:{
      width: '149px',
      height: '16px',
      fontFamily: 'Roboto',
  fontSize: '16px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight:'1',
  letterSpacing: 'normal',
  color: '#ffffff',
  whiteSpace: 'nowrap'
  }
}),
{ index: 1 }
);
  