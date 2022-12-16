import { Toolbar, Link, Divider, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import {styleTitleSideBar, styleToolBar} from '../styles';
import Contact from '../Contact/Contact';
import './sideBar.css';

function ButtonSideBar({href, ButtonName}){
    return <ListItem button component={Link} href= {href}>
        <ListItemText>{ButtonName}</ListItemText>
    </ListItem>
}

function SideBar({variant, open, onClose}){
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
        <List component='nav'>
            <ButtonSideBar href="/signIn" ButtonName="SIGN IN"/>
            <ButtonSideBar href="/signUp" ButtonName="SIGN UP"/>
        </List>
        <div className="inferior">
          <Divider/>
          <List component='nav'>
            <ButtonSideBar href="/AboutUs" ButtonName="ABOUT US"/>
            <Contact/>
          </List>
        </div>
      </Drawer>
    );
}

export default SideBar;