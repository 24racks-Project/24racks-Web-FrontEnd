import {sendDataLogin, dataName, dataPassword} from '../../store/SignUp/actions';
import { TextField, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import './SignUp.css';

function Short(){
  return <div className='Short'>
      <h1>LOGO</h1>
      <h1>24Raks</h1>
      <h6>Pequeño frase sobre la empresa/proyecto</h6>
    </div>;
}

function SignUp({sendDataLogin, dataName, dataPassword, setIsLogin}){
  return (
    <div className='SignUp'>
      <div className='myData' align= 'center'>
          <ul>
            <li className='elems'>
              <Short/>
            </li>
            <li className='elems'>
              <div className='listButtons'>
                <List>
                  <ListItem><TextField id="username" label="username" variant="standard" onChange= {(e) => dataName(e.target.value)} required/></ListItem>
                  <ListItem><TextField id="password" label="password" variant="standard" onChange= {(e) => dataPassword(e.target.value)} required/></ListItem>
                  <ListItem><input type="button" onClick={() => sendDataLogin(setIsLogin)} value= 'SignUp' name= 'login'/></ListItem>
                </List>
              </div>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default connect(null, {sendDataLogin, dataName, dataPassword})(SignUp);