import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GamesAvailable from '../GamesAvailable/GamesAvailable';
import { ThemeProvider, createTheme } from "@mui/material";
import { blueGrey, indigo } from "@mui/material/colors";
import GameServer from '../GameServer/GameServer';
import HostingWeb from '../HostingWeb/HostingWeb';
import SideBar from "../SideBar/SideBar";
import AboutUs from '../AboutUs/AboutUs';
import SignUp from '../SignUp/SignUp';
import TopBar from "../TopBar/TopBar";
import SignIn from '../SignIn/SignIn';
import Offer from '../Offer/Offer';
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey
  }
})


function HomePageUser({setIsLogin}){
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const actionOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
        <ThemeProvider theme={theme}>
          <SideBar variant="temporary" open={isDrawerOpen} onClose={actionOpen}/>
          <TopBar actionOpen={actionOpen}/>
        </ThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/HostingWeb" component={HostingWeb} />
            <Route path="/GameServer" component={GameServer} />
            <Route path="/Offer" component={Offer} />
            <Route path="/GamesAvailable" component={GamesAvailable} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={() => { return <SignUp setIsLogin= {setIsLogin} />}}/>
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/" component={GamesAvailable} />
          </Switch>
        </BrowserRouter>
    </div>
  ); 
}

export default HomePageUser;