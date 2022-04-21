import {useState, useEffect} from 'react'
import {
      Grid,
      Container,
      Typography,
      Button,
      Select,
      FormControl,
      Avatar,
      MenuItem,
      FormHelperText
      } from '@mui/material';
      import axios from 'axios'
import {MEMBERS} from '../constants'

import * as styles from './CreateBet.styles'
import StyledFilterChip from './StyledFilterChip'
import SwipeableEdgeDrawer from './BetDrawer';
import {initialFormatter} from './formatters'
import userEvent from '@testing-library/user-event';
import {postBet} from './api/CoreAPI'



export default function MainView() {
  const classes = styles.createBetStyles()
  const [ trackingEvents, setTrackingEvents ] = useState([])
  const [ members, setMembers ] = useState([])
  const [ currentUser, setCurrentUser ] = useState()
  const [bets, setBets] = useState([])
  
  const [wagers,setWagers] = useState([])
  const [wager, setWager] = useState("")
  const [bet, setBet] = useState("")
  const [hole, setHole] = useState("");
  const [against, setAgainst] = useState([])
  

  

    useEffect(() => {
      if (localStorage.getItem('user') != '{}'){
        setMembers(MEMBERS)
        setCurrentUser(JSON.parse(localStorage.getItem('user')))
        setBets(["Longest Drive", "Closest to The Pin", "Best Score", "Longest Putt"])
        setWagers([1,5,10,20])
        const u = MEMBERS.filter(mem => mem.username == JSON.parse(localStorage.getItem('user')).username)
        setAgainst([...u])        
      }
      else {

        window.location.href = window.location.origin
      }

    }, [])


    const changeBetMembers = (mem) => {
        let currentMembers = against
        if (currentMembers.includes(mem)) {
            currentMembers = currentMembers.filter((x) => x != mem)
            setAgainst([...currentMembers])

        }
        else {
            currentMembers.push(mem)
            setAgainst([...currentMembers])
        }
    }


    const handleChange = (event) => {
        setHole(event.target.value);
      };

    const submitBet = () => {
        const data = {
            "betOwner" : currentUser.username,
            "bet" : bet,
            "members" : against,
            "hole": hole,
            "wager": wager,
            "active": true,
        }
        postBet(currentUser.username, bet, against, hole, wager).then(() => {
            window.location.href = window.location.href = `${window.location.origin}/1/activeBets`
        })
    }


  return (
      
    <div className={classes.appContainer}>

        <div className={classes.memberContainer}>
            <div className={classes.headerText}>Members</div>
            <div style={{fontSize:'.8rem', display:'flex', marginLeft:'50px'}}> Tap who you want to bet against</div>
            <div className={classes.memberGrid}>

            {
                  members.map((member) => (
                      <div item xs={4} className={classes.memberBox} onClick={() => changeBetMembers(member)}>

                        <Avatar style={{backgroundColor: against.includes(member) ? '#aae6ba' : ''}}>
                            {initialFormatter(member.name)}
                        </Avatar>
                        <Typography className={classes.multiLineEllipsis}>
                            {member.name.split(' ')[0]}
                        </Typography>
                      </div>
                  ))
                }
            </div>
        </div>
        <div className={classes.betContainer}> 
            <div className={classes.headerText}>Bet</div>
                    <div className={classes.betGrid}>

                    {
                        bets.map((b) => (
                            <div className={classes.betChip}>
                                    <StyledFilterChip onClick={() => setBet(b)} active={b==bet} label={b}></StyledFilterChip>
                            </div>
                        ))
                        }
                    </div>
            </div>
        <div className={classes.holeContainer}> 
            <div className={classes.headerText}>Hole</div>
                    <div className={classes.detailsGrid}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                            value={hole}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {
                                [...Array(18).keys()].map((h) => (
                                    <MenuItem value={h+1}>{h+1}</MenuItem>
                                ))
                                }
                            </Select>
                        </FormControl>
                        <Grid container spacing={2} className={classes.wagerGrid}>

                        {
                            wagers.map((w) => (
                                <Grid item xs={6} className={classes.betChip}>
                                        <StyledFilterChip onClick={() => setWager(w)} active={w==wager} label={`\$${w}`}></StyledFilterChip>
                                </Grid>
                            ))
                            }
                        </Grid>  
                    </div>

                    
                    
                </div>
        <div className={classes.betSlipContainer}> 

            <div className={classes.betSlipBox}>
                <div>
                        <div className={classes.betName}>
                            {bet} - hole {hole} 
                        </div>  
                        <div className={classes.wagerDisplay}>
                            ${wager} 
                        </div>  

                    </div>
                <div className={classes.betMemberGrid}>
                        {
                            against.map((member) => (
                                <div>
                                    <Avatar style={{backgroundColor: '#aae6ba', margin:'3px', height:'30px', width:'30px', fontSize:'.8rem'}}>
                                        {initialFormatter(member.name)}
                                    </Avatar>
                                </div>
                            ))
                            }
                    </div>  

                </div>
                    <div className={classes.submitButton}>
                        {
                            against.length > 1 && hole && bet && wager 
                            ?  <Button variant='filled' onClick={() => submitBet()}> Create Bet </Button> 
                            : <Button disabled variant='filled' > Select Fields </Button> 
}
                    </div>  
                </div>



    </div> 
    
        
  )
};