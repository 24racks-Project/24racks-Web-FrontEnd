import { Toolbar, AppBar, Link, Box, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import {styleAppBar, styleToolBar} from '../styles';


function ButtonTopBar({href, buttonName}){
    return <Link
        color= "inherit"
        variant= "button"
        underline= "none"
        href= {href}
        sx={{ m: 1 }}
    >{buttonName}</Link>
}

function TotalButtonsTopBar(){
    return (
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <ButtonTopBar buttonName= 'Hosting web' href=""/>
          <ButtonTopBar buttonName= 'Game server' href=""/>
          <ButtonTopBar buttonName= 'offer' href=""/>
          <ButtonTopBar buttonName= 'games available' href=""/>
        </Box>
    )
}

function TopBar({actionOpen}){
    return (
        <div>
            
            <AppBar sx={{ ...styleAppBar }}>
              <Toolbar sx={{ ...styleToolBar }}>
                <IconButton
                  sx={{marginRight: 2}}
                  color="inherit"
                  aria-label="menu"
                  onClick={()=> actionOpen()}
                >
                  <Menu />
                </IconButton>
                <TotalButtonsTopBar/>
              </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    );
}

export default TopBar;