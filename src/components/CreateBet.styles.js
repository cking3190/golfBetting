import {
    makeStyles
  } from "@mui/styles";
  
  export const createBetStyles = makeStyles((theme) => ({

    appContainer: {
     height:'90vh',
     width:'100vw',
    overflowX:'hidden',
    overflowY:'hidden',
    display:'flex',
    flexDirection:'column',
    },
    memberContainer: {
        height:'20vh',
        width:'100vw',
        display:'flex',
        flexDirection:'column'

      },
    betContainer: {

        height:'15vh',
        width:'100vw',
        display:'flex',
        flexDirection:'column'

    },
    holeContainer: {
        height:'20vh',
        width:'100vw',
        display:'flex',
        flexDirection:'column'

    },
    wagerContainer: {
        height:'20vh',
        width:'100vw',
        display:'flex',
        flexDirection:'column'

    },
    betSlipContainer: {
        align:'center',
        justify:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'20px',
        flexDirection:'column'

    },
    headerText:{
        alignSelf:'flex-start',
        marginLeft:'20px',
        marginTop:'5px'
    },

    memberGrid:{
        marginTop:'20px',
        overflowX:'scroll',
        display:'flex',
        marginLeft:'30px',
        width:'95vw',
        alignItems:'space-between',
        justifyContent:'space-between',
        alignSelf:'center',
    },
    detailsGrid:{
        marginTop:'20px',
        display:'flex',
        marginLeft:'30px',
        width:'100vw',
        alignItems:'space-between',
        justifyContent:'space-between',
        alignSelf:'center',
    },
    betGrid:{
        marginTop:'20px',
        overflowX:'scroll',
        display:'flex',
        marginLeft:'30px',
        width:'80vw',
        alignItems:'space-between',
        justifyContent:'space-between',
        alignSelf:'center',
    },
    betChip: {
        margin:'5px'
    },
    betName: {
        fontSize:'1.2rem',
        alignSelf:'center',
        fontWeight:'bold'
    },
    wagerDisplay: {
        fontSize:'1.5rem',
        alignSelf:'center',
        fontWeight:'bold'
    },
    memberBox:{
        display:'flex',
        margin:'5px',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    betSlipBox:{
        height:'15vh',
        width:'80vw',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
        borderWidth:'2px',
        border:'solid',
        borderColor:'lightGray',
        borderRadius:'20px',
        flexDirection:'column'
    },
    betMemberGrid: {
        display:'flex'
    },
    submitButton: {
        position:'fixed',
        bottom:'10%',
        backgroundColor:'lightGreen',
        width:'80vw',
        borderRadius:'10px'
    },
    wagerGrid : {
        width:'50vw',
        align:'center',
        justify:'center',
        marginBottom:'5px',
    },
    seeMemberGrid: {
        width:'75vw',
        alignItems:'center',
        justifyContent:'center'

    }



    
  }));
  