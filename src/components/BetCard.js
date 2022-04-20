import * as React from 'react';
import {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  Box
} from '@mui/material'

import {initialFormatter} from './formatters'
import axios from 'axios'



export default function BetCard(props) {
  const theme = useTheme();
  const [confirm, setConfirm] = useState(true)

  // const submitWinner = (d) => {
  //   const data = {
  //     id : d._id['$oid'],
  //     winner : {name: "Chris King", username : "cking3190@gmail.com"}
  // }
  // console.log('won')
  // axios({ method: 'post', url: `https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/postWinner`, data: data})
  // window.location.reload();
  // }

  const postScore = (d) => {
    const data = {
      id : d._id['$oid'],
      username : "wparsons",
      score: '10'
  }
  console.log('won')
  axios({ method: 'post', url: `https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/postScore`, data: data})
  }



  return (
    <Card sx={{ display: 'flex', marginBottom:'20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div style={{display:'flex'}}>
          <Typography component="div" variant="h5">
            ${props.betData.wager["$numberInt"]} {props.betData.bet} - Hole {props.betData.hole["$numberInt"]} 
          </Typography>

          </div>

      


        </CardContent>
        {
          props.betData.winner
          ? <div>{props.betData.winner.username}  </div>
          : (        <div style={{position:'relative', top:'25px', left:'150px'}}>
          <Button onClick={() => postScore(props.betData)} variant='contained'> PostScore </Button>
          
        </div>)

        }

        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <div style={{display:'flex'}}>
          {
                        props.betData.members.map((member) => (
                            <div>
                               
                                <Avatar style={{backgroundColor: '#aae6ba', margin:'3px', height:'20px', width:'20px', fontSize:'.8rem'}}>
                                  {initialFormatter(member.name)}
                                </Avatar>
                            </div>
                        ))
                        }
          </div>
                        

        </Box>
      </Box>
    </Card>
  );
}