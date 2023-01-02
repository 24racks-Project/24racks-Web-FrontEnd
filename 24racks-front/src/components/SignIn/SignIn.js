import {sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail, modifyDataPhone} from '../../store/SignIn/actions';
import {connect} from 'react-redux';
import { TextField, List, ListItem } from "@mui/material";
import './SignIn.css';

function SignIn({sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail, modifyDataPhone}){
  return (
  <div className='SignIn' align= 'center'>
    <div className='listButtons'>
      <List>
        <ListItem><TextField id="username" label="username" variant="standard" onChange= {(e) => modifyDataName(e.target.value)} required/></ListItem>
        <ListItem><TextField id="password" label="password" variant="standard" onChange= {(e) => modifyDataPassword(e.target.value)} required/></ListItem>
        <ListItem><TextField id="email" label="email" variant="standard" onChange= {(e) => modifyDataEmail(e.target.value)} required/></ListItem>
        <ListItem><TextField id="phone" label="phone" variant="standard" onChange= {(e) => modifyDataPhone(e.target.value)} required/></ListItem>
        <ListItem><input type="button" onClick={() => sendDataUser()} value= 'SignIn' name= 'Register'/></ListItem>
      </List>
    </div>
  </div>
  );
}

export default connect(null, {sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail, modifyDataPhone})(SignIn);