import {useState, useEffect} from 'react'
import {
      Grid,
      Container,
      Typography,
      Button
      } from '@mui/material';
      import axios from 'axios'

import BetCard from './BetCard'
import SubmitScoreModal from './SubmitResultModal';

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
    <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <SubmitScoreModal open={true}/>
        <div style={{marginTop:'20px'}}> 
            {bets.map((te) => <BetCard betData={te}> </BetCard>)}
        </div>
    </Container>
  )
};