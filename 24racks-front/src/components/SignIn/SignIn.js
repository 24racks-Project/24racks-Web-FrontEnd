import {sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail} from '../../store/SignIn/actions';
import { TextField, List, ListItem } from "@mui/material";
import {  styled } from '@mui/material/styles';
import {connect} from 'react-redux';
import * as React from 'react';
import './SignIn.css';

const CssTextField = styled(TextField)({
  input: {
    color: '#ffda53',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'yellow',
    },
  },
  '& label.Mui-focused': {
    color: '#ffda53',
  },
  '& label': {
    color: '#ffda53',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffda53',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffda53',
    },
  }
});


function ShortSignIn(){
  return <div className='ShortSignIn'>
    <div className= 'body'>
      <h1>Join us!</h1>
      <img src='./logo.jpg' alt="Remy Sharp" className='logoSignIn'/>
    </div>
  </div>;
}

function Square(){
  return <div className='square'>
      <div className='Cuadrado1'></div>
      <div className='Cuadrado2'></div>
    </div>;
}

function SignIn({sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail}){
  return (
  <div className='SignIn'>
    <ShortSignIn/>
    <div className='listButtons'>
        <List className='register'>
          <ListItem><CssTextField id="username" label="username" onChange= {(e) => modifyDataName(e.target.value)} required/></ListItem>
          <ListItem><CssTextField id="password" label="password" type="password" onChange= {(e) => modifyDataPassword(e.target.value)} required/></ListItem>
          <ListItem><CssTextField id="email" label="email" onChange= {(e) => modifyDataEmail(e.target.value)} required/></ListItem>
          <ListItem><input type="button" onClick={() => sendDataUser()} value= 'SignUp' name= 'Register' className='register-button'/></ListItem>
        </List>
    </div>
    <Square/>
  </div>
  );
}

export default connect(null, {sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail})(SignIn);

/**
 * Fondo: 052d37;
 * font: dbc393;
 * Fondo-2: ec5b40;
 */