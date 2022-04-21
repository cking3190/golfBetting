import * as React from 'react';
import {useState, useEffect} from 'react';
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
import {undoWinner} from './api/CoreAPI'
import SubmitScoreModal from './SubmitResultModal';
import * as styles from './BetCard.styles'




export default function BetCard(props) {
  const theme = useTheme();
  const classes = styles.betCardStyles()
  const [confirm, setConfirm] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [modalOpen, setModalOpen] = useState(false)

  // const submitWinner = (d) => {
  //   const data = {
  //     id : d._id['$oid'],
  //     winner : {name: "Chris King", username : "cking3190@gmail.com"}
  // }
  // console.log('won')
  // axios({ method: 'post', url: `https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/postWinner`, data: data})
  // window.location.reload();
  // }




  useEffect(()=> {
    setCurrentUser(JSON.parse(localStorage.getItem('user')))

  }, [])

  const toggleModal = (tog) => {
    setModalOpen(tog)
  }

  const undo = (d) => {
    undoWinner(d['_id']['$oid']).then(()=> {
      window.location.reload()
    })
  }



  return (
    <Card sx={{ display: 'flex', marginBottom:'20px' }}>
      {modalOpen
      ?<SubmitScoreModal open={modalOpen} onChange={toggleModal} betData={props.betData} currentUser={currentUser}/>
      :<div></div>
      }
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <div style={{display:'flex', flexDirection:'column'}}>
          <Typography component="div" variant="h5">
            ${props.betData.wager["$numberInt"]} {props.betData.bet} - Hole {props.betData.hole["$numberInt"]} 
          </Typography>
          <div style={{display:'flex', flexDirection:'row'}}>
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


          </div>

      


        </CardContent>
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start',justifyContent:'space-between'}}>
        {
          props.betData.winner
          ? <div>WINNER - {props.betData.winner.name}  </div>
          : (        <div style={{position:'relative', left:'190px'}}>
          <Button onClick={() => toggleModal(true)} variant='contained'> Open Scores </Button>
          
        </div>)

        }

        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <div style={{display:'flex'}}>

          </div>
                        

        </Box>


        </div>
        
      </Box>
      {currentUser.username === 'cking'
      ? <Button onClick={() => undo(props.betData)}style={{height:'.5rem'}} variant='contained' color='secondary'> Undo</Button>
      : <div/>
      }
    </Card>
  );
}