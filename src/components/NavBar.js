import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function NavBar() {
  const [value, setValue] = useState('None');
  
  let groupId = window.location.pathname.split('/')[1]

  useEffect(() => {
    if (value=='activeBets') {
        window.location.href=`${window.location.origin}/${groupId}/activeBets`
    }
    else if (value == 'makeBet'){
        window.location.href=`${window.location.origin}/${groupId}/createBet`
    }
    else if (value == 'leaderboard'){
      window.location.href=`${window.location.origin}/${groupId}/leaderboard`
  }
  else if (value == 'payouts'){
    window.location.href=`${window.location.origin}/${groupId}/payouts`
}
  }, [value])

  return (
    <Box sx={{ width : '100vw', position:'fixed', bottom:'0', left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Make Bet" value='makeBet' icon={<AttachMoneyIcon />} />
        <BottomNavigationAction label="My Bets" value='activeBets' icon={<GolfCourseIcon />} />
        <BottomNavigationAction label="Leaderboard" value='leaderboard' icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Payouts" value='payouts' icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}