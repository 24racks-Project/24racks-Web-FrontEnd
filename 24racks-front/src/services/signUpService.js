import {API, endpoints} from './api';
import { verifyDataLoginUser } from './dataUser';
import Cookies from '../cookies';

function handleResponseLogin(response, setIsSignUpUser){
    if(response.status === 200){
        alert("Logueado");
        Cookies.setCookie("username", response.data.username, 1);
        Cookies.setCookie("tkn", response.data.token, 1);
        setIsSignUpUser(true);
        return {state: 'OK', data: ''};
    } else {
        alert("Faltan datos");
        setIsSignUpUser(false);
        return {state: 'ERROR', data: response};
    }
}

async function signUpService(dataLoginUser, setIsSignUpUser){
    if(verifyDataLoginUser(dataLoginUser)){
        return API.post(endpoints.login, dataLoginUser)
        .then( (response) => handleResponseLogin(response, setIsSignUpUser))
        .catch( (err) => handleResponseLogin(err, setIsSignUpUser));
    } else {
        alert("Faltan datos");
    }
}

export default signUpService;