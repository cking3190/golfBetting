import {useState, useEffect } from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import * as styles from './Leaderboard.styles'
import axios from 'axios'
import { initialFormatter } from './formatters';
import dave from '../assets/daved.png'

export default function Leaderboard() {
    const classes = styles.leaderboardStyles()

    const [leaderboard, setLeaderboard] = useState([])
    const [allBets, setAllBets] = useState(true)

    useEffect(() => {
        console.log('here')
            axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/getLeaderboard`)
            .then((res) => {
                const data = res.data;
                setLeaderboard(data)
            })
        }, [])


    const handleLogout = () => {
        localStorage.removeItem("user")
        window.location.href = window.location.origin

    }
  
  return (
    <div className={classes.leaderboardContainer}>
                            <img src={dave} style={{position:'fixed', top:'10px', left:'50px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', right:'50px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', left:'10px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', right:'10px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', left:'90px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', right:'90px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', left:'130px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', right:'130px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', right:'170px'}} height='40px' width='40px'/>

        <Button color='secondary' variant='contained' style={{position:'fixed', top:'10px', right:'10px'}}onClick={()=>handleLogout()}> Logout </Button>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            { allBets 
            ? <div> 
            {leaderboard.map((bet) => <div> 
                <ListItem>
                    <ListItemAvatar>
                    <Avatar style={{backgroundColor: '#aae6ba'}}>
                            {initialFormatter(bet._id)}
                    </Avatar>
                    </ListItemAvatar>
                    <div>  {`${bet._id} :  \$${bet.winnings['$numberInt'] ? bet.winnings['$numberInt'] : bet.winnings['$numberLong']}`} </div>
                </ListItem> 
                </div>)}
            </div>
            :<div>
            {leaderboard.map((bet) => <div> 
                <ListItem>
                    <ListItemAvatar>
                    <Avatar style={{backgroundColor: '#aae6ba'}}>
                            {initialFormatter(bet._id)}
                    </Avatar>
                    </ListItemAvatar>
                    <div>  {`${bet._id} :  \$${bet.winnings['$numberInt'] ? bet.winnings['$numberInt'] : bet.winnings['$numberLong']}`} </div>
                </ListItem> 
                </div>)}
            </div>


            }




        </List>

    </div>

  );
}