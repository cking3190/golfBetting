import {useState, useEffect} from 'react'
import {
      Grid,
      Container,
      Typography,
      Button
      } from '@mui/material';
      import axios from 'axios'

import BetCard from './BetCard'

export default function MainView() {
  const [ bets, setBets ] = useState([])


    useEffect(() => {
      console.log('here')
        axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/getAllBets`)
        .then((res) => {
            const data = res.data;
            setBets(data)
        })
    }, [])



  return (
    <Container style={{display:'flex', height:'90vh',overflowY:'scroll', flexDirection:'column', alignItems:'center'}}>
        <div style={{marginTop:'20px'}}> 
            {bets.map((b) => <BetCard betData={b}> </BetCard>)}
        </div>
    </Container>
  )
};