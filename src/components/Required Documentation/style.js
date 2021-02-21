import makeStyles from '@material-ui/core/styles/makeStyles';
export default makeStyles((theme) => ({
    root:{
        width: '726px',
  height: '96px',
  margin: '-203px 0 100px',
  padding: '50px 372px 50px 421px',
  backgroundColor:' #f6fbff',
  [theme.breakpoints.down("xs")]: {
    width: '789px',
    height: '170px',
    margin: '-785px 0 0 0',
    padding:' 100px 71px 10px 143px;',
    backgroundColor: '#f6fbff',
},
[theme.breakpoints.only("sm")]: {
    
        width: '1214px',
  height: '96px',
   
},
    },
    title:{
        width: '249px',
        height: '26px',
        margin: '0 246px 20px 200px',
        fontFamily:' Roboto',
        fontSize: '20px',
        fontWeight: 'bold;',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight:' normal',
        letterSpacing: '-0.71px',
        color: '#000000',

    },
    details:{
        width:' 159px',
        height: '26px',
        margin: '0 0 16px 484px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.44',
        letterSpacing:' -0.5px',
        color: '#595f6f',
    },
    continer:{
        [theme.breakpoints.only("sm")]: {
            padding: '0 0 0 223px',
        },
    },
    Possession:{
        width: '200px',
  height: '42px',
//   margin: '-35 120px 0 129px',
marginTop: '-54px',

  padding:' 0 0 0 196px',
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontweight:' 300',
  fontStretch:' normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.36px',
  textAlign: 'center',
  color: '#595f6f',
    },
    Possession2:{
        width: '200px',
        height: '42px',
      //   margin: '-35 120px 0 129px',
      marginTop: '-3px',
      
        
        fontFamily: 'Roboto',
        fontSize: '13px',
        fontweight:' 300',
        fontStretch:' normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '-0.36px',
        textAlign: 'center',
        color: '#595f6f',

    },


    
    Emirates:{
        width: '87px',
        height: '26px',
        margin: '-30px 129px 16px 20px',
        fontFamily: 'Roboto;',
        fontSize: '18px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.44',
        letterSpacing: '-0.5px',
        color: '#595f6f',
    }


}),
{ index: 1 }
);
