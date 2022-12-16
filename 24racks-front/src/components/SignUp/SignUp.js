import {sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail} from '../../store/SignUp/actions';
import {connect} from 'react-redux';
import { TextField, List, ListItem } from "@mui/material";
import './SignUp.css';

function SignUp({sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail}){
  return (
    <div className='SignUp'>
      <div className='myData' align= 'center'>
          <ul>
            <li className='elems'>
              <div className='Short'>
                <h1>LOGO</h1>
                <h1>24Raks</h1>
                <h6>Pequeño frase sobre la empresa/proyecto</h6>
              </div>
            </li>
            <li className='elems'>
              <div className='listButtons'>
                <List>
                  <ListItem><TextField id="username" label="username" variant="standard" onChange= {(e) => modifyDataName(e.target.value)} required/></ListItem>
                  <ListItem><TextField id="password" label="password" variant="standard" onChange= {(e) => modifyDataPassword(e.target.value)} required/></ListItem>
                  <ListItem><input type="button" onClick={() => sendDataUser()} value= 'SignUp' name= 'login'/></ListItem>
                </List>
              </div>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default connect(null, {sendDataUser, modifyDataName, modifyDataPassword, modifyDataEmail})(SignUp);