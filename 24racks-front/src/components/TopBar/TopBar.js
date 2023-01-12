import { Toolbar, AppBar, Link, Box, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import {styleAppBar, styleToolBar} from '../styles';
import React from 'react';

const menuItems = [
  {  title: 'Hosting web', url: '/HostingWeb', submenu: [] },
  {  title: 'Game Server', url: '/GameServer', submenu: [] },
  {  title: 'offer', url: '/offer', submenu: [] }
];

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
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'right' }}>
        {
          menuItems.map( (item, index) => <ButtonTopBar key= {index} buttonName={item.title} href={item.url}/> )
        }
      </Box>
  );
}

function TopBar({actionOpen}){
    return (
        <div className="home">
            
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