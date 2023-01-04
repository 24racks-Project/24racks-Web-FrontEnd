import { TextField, List, ListItem } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import React from "react";
import {sendNewPassword, currentPassword, newPassword} from '../../../store/ModifyPassword/actions';
import {connect} from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModifyPassword({sendNewPassword, currentPassword, newPassword}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Modify Password</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Modify Password
            </Typography>
            <List>
              <ListItem><TextField id="currentPassword" label="currentPassword" variant="standard" onChange= {(e) => currentPassword(e.target.value)} required/></ListItem>
              <ListItem><TextField id="newPassword" label="newPassword" variant="standard" onChange= {(e) => newPassword(e.target.value)} required/></ListItem>
              <ListItem><input type="button" value= 'OK' name= 'OK' onClick={() => sendNewPassword()} /></ListItem>
            </List>
        </Box>
      </Modal>
    </div>
  );
}

export default connect(null, {sendNewPassword, currentPassword, newPassword})(ModifyPassword);