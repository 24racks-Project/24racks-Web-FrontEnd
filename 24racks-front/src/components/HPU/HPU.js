import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GamesAvailable from '../GamesAvailable/GamesAvailable';
import { ThemeProvider, createTheme } from "@mui/material";
import HiredServices from '../HiredServices/HiredServices'; 
import { blueGrey, indigo } from "@mui/material/colors";
import GameServer from '../GameServer/GameServer';
import HostingWeb from '../HostingWeb/HostingWeb';
import { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import SignOff from '../SignOff/SignOff';
import AboutUs from '../AboutUs/AboutUs';
import Setting from '../Setting/Setting';
import SignUp from '../SignUp/SignUp';
import TopBar from "../TopBar/TopBar";
import SignIn from '../SignIn/SignIn';
import MyData from '../MyData/MyData';
import Cookies from '../../cookies';
import Offer from '../Offer/Offer';
import Success from '../GameServer/Success';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey
  }
})

function RoutesLogin({setIsLogin}){
  return <Switch>
      <Route path="/SignOff" component={() => SignOff({setIsLogin})} />
      <Route path="/GamesAvailable" component={GamesAvailable}/>
      <Route path="/HostingWeb" component={HostingWeb} />
      <Route path="/GameServer" component={GameServer} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/MyData" component={MyData} />
      <Route path="/Setting" component={Setting} />
      <Route path="/HiredServices" component={HiredServices} />
      <Route path="/Offer" component={Offer} />
      <Route path="/saveGameService/:username/:token/:id_service/:id_plan/:id_transaction" component={() => Success({})} />
      <Route path="/" component={GamesAvailable} />
    </Switch>
}

function RoutesUser({setIsLogin}){
  return <Switch>
      <Route path="/signUp" component={() => { return <SignUp setIsLogin= {setIsLogin} />}}/>
      <Route path="/GamesAvailable" component={GamesAvailable} />
      <Route path="/HostingWeb" component={HostingWeb} />
      <Route path="/GameServer" component={GameServer} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/Offer" component={Offer} />
      <Route path="/" component={GamesAvailable} />
    </Switch>
}

function HomePage(){
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const actionOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const username = Cookies.getCookie("username");
    const tkn = Cookies.getCookie("tkn");
    if (!(username && tkn) && isLogin) {
      setLogin(false);
    } else if (username && tkn) {
      setLogin(true);
    }
  }, [isLogin]);

  return (
    <div>
        <ThemeProvider theme={theme}>
          <SideBar variant="temporary" open={isDrawerOpen} onClose={actionOpen} isLogin={login}/>
          <TopBar actionOpen={actionOpen}/>
        </ThemeProvider>
        <BrowserRouter>
            {
              (login)? <RoutesLogin setIsLogin= {setLogin}/> : <RoutesUser setIsLogin= {setIsLogin}/>
            }
        </BrowserRouter>
    </div>
  ); 
}

export default HomePage;