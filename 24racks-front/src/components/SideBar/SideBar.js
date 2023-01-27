import { Toolbar, Link, Divider, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import {styleTitleSideBar, styleToolBar} from '../styles';
import './sideBar.css';

function ButtonSideBar({href, ButtonName}){
  return <ListItem button component={Link} href= {href}>
      <ListItemText>{ButtonName}</ListItemText>
  </ListItem>
}

function ListNav({isLogin}){
  if (isLogin) return <List component='nav'>
      <ButtonSideBar href="/MyData" ButtonName="MY DATA"/>
      <ButtonSideBar href="/Setting" ButtonName="SETTING"/>
      <ButtonSideBar href="/HiredServices" ButtonName="HIRED SERVICES"/>
      <ButtonSideBar href="/SignOff" ButtonName="SIGN OFF"/>
    </List>;
  else return <List component='nav'>
      <ButtonSideBar href="/signIn" ButtonName="SIGN IN"/>
      <ButtonSideBar href="/signUp" ButtonName="SIGN UP"/>
    </List>;
}

function SideBar({variant, open, onClose, isLogin}){
  return (
    <Drawer
      PaperProps={{sx: {width: 260, flexShrink: 0 }}}
      anchor="left"
      variant={variant}
      open={open}
      onClose={onClose ? onClose : null}
    >
      <Toolbar sx={{...styleToolBar}}>
          <Typography variant="h6" sx={{...styleTitleSideBar}}>
              24racks
          </Typography>
      </Toolbar>
      <Divider/>
      <ListNav isLogin={isLogin}/>
    </Drawer>
  );
}

export default SideBar;