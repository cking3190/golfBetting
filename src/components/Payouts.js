import {useState, useEffect } from 'react';
import {Typography, Divider} from '@mui/material'
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
import {getPayouts} from './api/CoreAPI'
import {MEMBERS} from '../constants'

export default function Payouts() {
    const classes = styles.leaderboardStyles()

    const [leaderboard, setLeaderboard] = useState([])
    const [payouts, setPayouts] = useState([])

    useEffect(() => {
            getPayouts().then((res) => {
                const data = res.data;
                var payArray =[]
                MEMBERS.forEach((mem) => {
                    const memberBets = data.filter(d => d.members.username == mem.username)
                    let memObj = {}
                    memObj['User'] = mem.name
                    memObj['PayInfo'] = []
                    memberBets.forEach((bet) => {

                        if (bet.members.name != bet.winner.name){
                            var index = memObj["PayInfo"].findIndex(x => x.to == bet.winner.name); 
                            index === -1 ? memObj["PayInfo"].push({"to" : bet.winner.name, "value" : parseInt(bet.payout['$numberInt'])*-1}) : memObj["PayInfo"][index]["value"] += parseInt(bet.payout['$numberInt']) * -1

                            }
                        })
                    payArray.push(memObj)
                    })
                    setPayouts(payArray)
                })
        }, [])

  
  return (
    <div className={classes.leaderboardContainer}>

             

    <List style={{overflowY:'scroll'}}>
    {payouts.map((p) => <div> 
                <ListItem>
                    <div className={classes.payoutContainer} >
                        <div style={{display:'flex'}}>
                            <ListItemAvatar>
                            <Avatar style={{backgroundColor: '#aae6ba'}}>
                                    {initialFormatter(p.User)}
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={p.User} />
                        </div>

                        <div>
                
                            <div > 
                                {p.PayInfo.map((info) => 
                                    <div> {info.to} ${info.value} </div>
                                )}
                                
                            </div>
                    </div>

                    </div>


                </ListItem> 

                <Divider/>
                </div>)}

    </List>
       




                    


    </div>

  );
}