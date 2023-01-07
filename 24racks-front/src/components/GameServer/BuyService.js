/*
import {postCardholderName, postCardNumber, postDateExpi, postCVC, sendDataCard} from '../../store/BuyService/actions';
import {Typography, Modal, Box, TextField, List, ListItem} from '@mui/material';
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { useRedirect } from 'react-admin';

const styleDataCard = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const styleExpDate = {
    width: 80, 
    'marginRight': 10
}

const styleDataItemCard = {
    'marginLeft': -15
}

const styleCVC = {
    'marginLeft': 15
}

function BuyService({postCardholderName, postCardNumber, postDateExpi, postCVC, sendDataCard, open, handleClose}) {

  return <Modal
      open={true}
      onClose={() => true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleDataCard}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter a credit card
          </Typography>
          <List>
            <ListItem style={styleDataItemCard}>
              <TextField id="cardholderName" label="cardholder name" variant="standard" onChange={(e) => postCardholderName(e.target.value) } required/>
            </ListItem>
            <ListItem style={styleDataItemCard}>
              <TextField id="cardNumber" label="card number" variant="standard" onChange={(e) => postCardNumber(e.target.value)} required/>
            </ListItem>
          </List>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            Exp. date(MM/YY)
          </Typography>
          <List>
            <ListItem style={styleDataItemCard}>
              <TextField id="MM/YY" label="MM/YY" variant="standard" style={styleExpDate} onChange={(e) => postDateExpi(e.target.value)} required/>
              <TextField id="CVC" label="CVC" variant="standard" style={styleCVC} onChange={(e) => postCVC(e.target.value)} required/>
            </ListItem>
            <ListItem style={styleDataItemCard}><input type="button" onClick={() => sendDataCard()} value= 'buy' name= 'buy'/></ListItem>
          </List>
      </Box>
    </Modal>;
}

export default connect(null, {postCardholderName, postCardNumber, postDateExpi, postCVC, sendDataCard})(BuyService);
*/