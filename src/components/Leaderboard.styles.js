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
        height:'90vh',
        width:'100vw',
       overflowX:'hidden',
       overflowY:'hidden',
       display:'flex',
       alignItems:'center',
       justifyContent:'center'
    }
  }));
  