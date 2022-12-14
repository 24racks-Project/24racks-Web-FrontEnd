import { Toolbar, Link, Divider, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import {styleTitleSideBar, styleToolBar} from '../styles';

function ButtonSideBar({href, ButtonName}){
    return <ListItem button component={Link} to= {href}>
        <ListItemText>
          {ButtonName}
        </ListItemText>
    </ListItem>
}

function SideBar({variant, open, onClose}){
    return (
      <Drawer
        PaperProps={{sx: {width: 260, flexShrink: 0}}}
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
            <ButtonSideBar href="" ButtonName="SIGN IN"/>
            <ButtonSideBar href="" ButtonName="SIGN UP"/>
        </List>
        <Divider/>
        <List component='nav'>
            <ButtonSideBar href="" ButtonName="CONTACT"/>
            <ButtonSideBar href="" ButtonName="ABOUT US"/>
        </List>
      </Drawer>
    );
}

export default SideBar;