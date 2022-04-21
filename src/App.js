import logo from './logo.svg';
import './App.css';
import MainView from './components/MainView'
import CreateBet from './components/CreateBet'
import Leaderboard from './components/Leaderboard'
import NavBar from './components/NavBar'
import Payouts from './components/Payouts'
import SetUser from './components/SetUser'
import {Route, BrowserRouter,Routes} from "react-router-dom";

import {createTheme, ThemeProvider} from '@mui/material/styles';

export const THEME = createTheme({

  palette: {
    "common": {
      "black": "#000",
      "white": "#fff"
    },
    "background": {
      "paper": "#fff",
      "main": "#040320",
      "default": "rgba(4, 3, 32, 1)",
      "form": "#484462"
    },
    "primary": {
      "light": "rgba(188, 248, 236, 1)",
      "main": "#aae6ba",
      "dark": "rgba(74, 184, 154, 1)",
      "contrastText": "rgba(4, 3, 32, 1)"
    },
    "secondary": {
      "light": "rgba(0, 0, 0, 1)",
      "main": "rgba(0, 0, 0, 1)",
      "dark": "rgba(0, 0, 0, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "#3F3E42",
      "secondary": "#C1BEBC",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)",
      "contrast": 'white'
    }
  },
  typography: {
     "fontFamily": `Proxima`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
   },
  overrides: {
    MuiMenuItem: {
      root: {
        background: "#040320",
        color: "#D8D8D8",
        '&:focus': {
          backgroundColor: "#040320",
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: "white"
          }
        }
      }
    },
    MuiInputBase: {
      input: {
        color: "#D8D8D8",
        textAlign: 'left',
        fontSize: 'auto',
        padding: '0 0 .4rem 0',
        marginTop: '-.4rem',
      }
    },
    MuiInputLabel: {
      root: {
        color: "#D8D8D8",
        textAlign: 'center',
        padding: '0 0 .4rem 0',
        marginTop: '-.4rem',
      }
    },
    MuiAvatarGroup: {
      avatar: {
        border: '0px'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor:"#484462",
        border: '1px',
        outline: 'none'

      }
    }

  }
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={THEME}>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetUser/>} />
        <Route path="/:groupId/createBet" element={<CreateBet />} />
        <Route path="/:groupId/activeBets" element={<MainView />} />
        <Route path="/:groupId/leaderboard" element={<Leaderboard />} />
        <Route path="/:groupId/payouts" element={<Payouts />} />
      </Routes>
    </BrowserRouter>
    <NavBar/>



          

    </ThemeProvider>



    </div>
  );
}

export default App;
