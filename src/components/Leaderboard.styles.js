import {
    makeStyles
  } from "@mui/styles";
  
  export const leaderboardStyles = makeStyles((theme) => ({
      

    appContainer: {
     height:'90vh',
     width:'100vw',
    overflowX:'hidden',
    overflowY:'hidden',
    display:'flex',
    flexDirection:'column',
    },
    leaderboardContainer: {
        marginTop:'20px',
        height:'90vh',
        width:'100vw',
       overflowX:'hidden',
       overflowY:'hidden',
       display:'flex',
       alignItems:'center',
       justifyContent:'center'
    },
    payoutContainer: {
       display:'flex',
       justifyContent:'space-between', 
       alignItems:'center',
       width:'80vw',
       maxHeight:'90vh',
       overflowY:'scroll'
    }
  }));
  