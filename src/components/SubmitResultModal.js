import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ListItem, List, TextField} from '@mui/material'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'
import {postScore, getBetDetails, postWinner} from './api/CoreAPI'
import * as styles from './BetCard.styles'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SubmitScoreModal(props) {
  const classes = styles.betCardStyles()
  const [open, setOpen] = useState(props.open);
  const [betData, setBetData] = useState({})
  const [scoreInput, setScoreInput] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [betUpdate, setBetUpdate] = useState('')
  const currentUser = props.currentUser
  const handleOpen = () => setOpen(true);
  
  


  useEffect(() => {
      getBetDetails(props.betData._id['$oid']).then((res) => {
          let r = res.data
          r.members.map(mem => { if (mem.score){ mem.score=mem.score} else {mem.score = 0}})
          setBetData(r)
      })
  },[])

  useEffect(() => {
    getBetDetails(props.betData._id['$oid']).then((res) => {
        let r = res.data
        r.members.map(mem => { if (mem.score){ mem.score=mem.score} else {mem.score = 0}})
        setBetData(r)
    })
},[betUpdate])


  const logScore = (d, score) => {
    postScore(d['_id']['$oid'], currentUser.username, score).then(()=> {
      
    })
  }

  const handleTextInput = (event) => {
    setScoreInput(event.target.value);
  };

  const handleClose = () => {
    props.onChange(false)
  };

    const forceWinner = (d) => {

        console.log('won')
        postWinner(d._id['$oid'], currentUser.name, currentUser.username).then(() => {
            setBetUpdate('abc')
            window.location.reload()
        })
        
        }



  return (
    <div>
      <Modal
        open={props.open}
        onClose={()=> handleClose}
        onBackdropClick={()=> handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{fontSize:'.8rem'}}> You can only submit your own score, to make it easy for you simpletons I also made it so you can claim victory on the bet, but lets not be dicks about this. If you claim victory there's really no going back</div>
            {betData.members
            ? (betData.members.map((member) => <div> 
                <ListItem>
                    { member.username == currentUser.username
                        ? (
                        
                        <div>
                            <div>{member.name} </div>
                            <div style={{display:'flex',justifyContent:'flex-start', width:'50vw'}}>
                              <TextField value={scoreInput} onChange={handleTextInput} style={{width:'5rem', height:'1rem'}}> </TextField>
                              <Button variant='contained' style={{width:'5rem', height:'3.2rem', marginLeft:'15px'}} onClick={() => logScore(betData, scoreInput)}> Submit Score</Button>


                            </div>
                            
                        </div>)
                        : (<div> <div> {member.name} </div><div> {member.score}</div> </div> )
                    }
                    
                        
                </ListItem> 
                </div>))
            : <div/>}
    <div className={classes.bottomButtons}>
            <Button variant='contained' onClick={handleClose}> Close</Button>
            {confirm
            ? <Button variant='contained' color='secondary' onClick={() => forceWinner(props.betData)}> Confirm, don't be a dick</Button>
            :<Button variant='contained' onClick={() => setConfirm(true)}> Force Claim Victory</Button>
            }
            

    </div>

        
        </Box>
      </Modal>
    </div>
  );
}