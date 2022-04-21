import {useState, useEffect} from 'react';
import {Button,
    Avatar,
    Typography,
Grid} from '@mui/material';
import {MEMBERS} from '../constants'
import {initialFormatter} from './formatters'
import * as styles from './CreateBet.styles'
import dave from '../assets/daved.png'

export default function SetUser() {
    const classes = styles.createBetStyles()
  const members = MEMBERS

  const [user, setUser] = useState({});
  

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))

  }, [user])

  return (
        <div className={classes.memberContainer} style={{marginTop:'1rem'}}>
            <img src={dave} style={{position:'fixed', top:'10px', left:'30px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', right:'30px'}} height='40px' width='40px'/>

            <Typography variant='h6'  style={{fontSize:'.9rem'}}> Welcome to Dave's Betting App </Typography>
            <Typography variant='h6' style={{fontSize:'.8rem'}}> Select Your User </Typography>
            <Grid container spacing={2} className={classes.seeMemberGrid}>

            {
                members.map((member) => (
                    <Grid item xs={5}>                     
                    <div className={classes.memberBox} onClick={() => setUser(member)}>

                        <Avatar style={{backgroundColor: user.username === member.username ? '#aae6ba' : ''}}>
                            {initialFormatter(member.name)}
                        </Avatar>
                        <Typography className={classes.multiLineEllipsis}>
                            {member.name}
                        </Typography>
                        </div>

                    </Grid>

                ))
                }
            </Grid>
            <Button variant='contained' onClick={() => window.location.href = `${window.location.origin}/1/createBet`}> Set User </Button>
        </div>
  );
}