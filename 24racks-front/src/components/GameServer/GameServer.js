import {postGame, postPlan, sendDataPlan} from '../../store/BuyService/actions';
import { useHistory } from "react-router-dom";
import GamesOptions from './GameOptions';
import React, { useState, useEffect } from 'react';
import PlanOptions from './PlanOptions';
import Cookies from '../../cookies';
import {connect} from 'react-redux';
import './GameServer.css';
import gameServerService from '../../services/gameServerService';

function GameServer({postGame, postPlan, sendDataPlan}){
  const [dataGameOptions, setDataGameOptions] = useState([]);
  const [changeGame, setChangeGame] = useState([]);
  const [changeOption, setChangeOption] = useState(-1);
  const history = useHistory();

  useEffect(() => {
      gameServerService(setDataGameOptions);
  }, []);

  const verifyLogin = () => {
    const username = Cookies.getCookie("username");
    const tkn = Cookies.getCookie("tkn");
    if(!(username && tkn)) history.push('/SignUp');
    else if(changeGame.length === 0) alert("game not chosen");
    else if(changeOption === -1) alert("plan not chosen");
    else sendDataPlan();
  }

  return <div className='GameServer'>
      <div className='GameServerElems'>
        <h1>GameServer</h1>
        <GamesOptions options= {dataGameOptions} setChangeGame= {setChangeGame} postGame={postGame} />
        <PlanOptions options= {changeGame.plans?? []} setChangeOption= {setChangeOption} postPlan={postPlan} />
        <input type="button" value= 'buy plan' name= 'buyPlan' onClick={() => verifyLogin()}/>
      </div>
    </div>;
}
export default connect(null, {postGame, postPlan, sendDataPlan})(GameServer);