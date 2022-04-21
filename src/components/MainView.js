import {useState, useEffect} from 'react'
import {
      Grid,
      Container,
      Typography,
      Button,
        ButtonGroup
      } from '@mui/material';
      import axios from 'axios'

import BetCard from './BetCard'
import dave from '../assets/daved.png'

function filterByValue(array, string) {
  return array.filter(o =>
      Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
}

export default function MainView() {
  const [ bets, setBets ] = useState([])
  const [ visibileBets, setVisibleBets] = useState([])
  const [betView, setBetView] = useState('allBets')


    useEffect(() => {
      console.log('here')
        axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/getAllBets`)
        .then((res) => {
            const data = res.data;
            setBets(data)
            setVisibleBets(data)
        })
    }, [])

    useEffect(() => {
      if (betView === 'mybets') {
        setVisibleBets(bets)
      }
      else if (betView == 'activeBets'){
        setVisibleBets(bets.filter(b => b.active == true))

      }
      else {
        setVisibleBets(bets)
      }
    }, [betView])



  return (
    <Container style={{display:'flex', height:'90vh',overflowY:'scroll', flexDirection:'column', alignItems:'center'}}>
                          <img src={dave} style={{position:'fixed', top:'10px', left:'50px'}} height='40px' width='40px'/>
            <img src={dave} style={{position:'fixed', top:'10px', right:'50px'}} height='40px' width='40px'/>


              <div style={{marginTop:'20px'}}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={()=>setBetView('activeBets')}  color={betView==='activeBets'? 'primary' : 'secondary'}>Active Bets</Button>
                <Button onClick={()=>setBetView('allBets')} color={betView==='allBets'? 'primary' : 'secondary'}>All Bets</Button>
            </ButtonGroup>
            </div> 
        <div style={{marginTop:'20px'}}> 
            {visibileBets.map((b) => <BetCard betData={b}> </BetCard>)}
        </div>
    </Container>
  )
};