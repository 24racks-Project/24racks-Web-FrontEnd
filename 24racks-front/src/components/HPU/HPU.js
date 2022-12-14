import { ThemeProvider, createTheme } from "@mui/material";
import { blueGrey, indigo } from "@mui/material/colors";
import { Switch, Route } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey
  }
})

function HostingWeb(){
  return <div></div>;
}

function GameServer(){
  return <div></div>;
}

function Offer(){
  return <div></div>;
}

function GamesAvailable(){
  return <div></div>;
}

function HomePageUser() {
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
      </div>
    ); 


/**
 *           <ThemeProvider>
            <SideBar variant="temporary" open={isDrawerOpen} onClose={actionOpen}/>
            <TopBar actionOpen={actionOpen}/>
          </ThemeProvider>
          <Switch>
            <Route path="/HostingWeb" component={HostingWeb} />
            <Route path="/GameServer" component={GameServer} />
            <Route path="/Offer" component={Offer} />
            <Route path="/GamesAvailable" component={GamesAvailable} />
            <Route path="/" component={GamesAvailable} />
          </Switch>
 */
}

export default HomePageUser;