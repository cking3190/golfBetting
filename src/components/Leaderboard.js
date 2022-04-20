import {useState, useEffect } from 'react';
import List from '@mui/material/List';
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


export default function Leaderboard() {
    const classes = styles.leaderboardStyles()

    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        console.log('here')
            axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/getLeaderboard`)
            .then((res) => {
                const data = res.data;
                setLeaderboard(data)
            })
        }, [])

  
  return (
    <div className={classes.leaderboardContainer}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {leaderboard.map((bet) => <div> 
                <ListItem>
                    <ListItemAvatar>
                    <Avatar style={{backgroundColor: '#aae6ba'}}>
                            {initialFormatter(bet._id)}
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={bet._id} secondary={bet.winnings['$numberInt']} />
                </ListItem> 
                </div>)}

        </List>

    </div>

  );
}