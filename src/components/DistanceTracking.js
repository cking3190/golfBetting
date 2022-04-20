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
  const [ trackingEvents, setTrackingEvents ] = useState([])


    useEffect(() => {
      console.log('here')
        axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/get_all`)
        .then((res) => {
            const data = res.data;
            setTrackingEvents(data)
        })
    }, [])




    const handleStart = () => {
      if (navigator.geolocation) {
        let pos = navigator.geolocation.getCurrentPosition(sendStart);
      }
      

    }

    const sendStart = (position) => {
      let randomId = Math.round(Math.random() * 100000000000000000)
      axios.get(`https://us-east-1.aws.data.mongodb-api.com/app/golftracking-oekmn/endpoint/settrackingstart?id=${randomId}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
      .then((res) => {
          const data = res.data;
          setTrackingEvents(data)
      })
    }


  return (
    <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div style={{marginTop:'20px'}}> 
            {trackingEvents.map((te) => <BetCard betData={te}> </BetCard>)}
        </div>
        <Button style={{height:'10px', width:'10px', position:'fixed', top:'50%', left:'50px', backgroundColor:'green'}} onClick={handleStart}> </Button>
    </Container>
  )
};