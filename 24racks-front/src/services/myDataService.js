import {API, endpoints, alertSwal} from './api';
import Cookies from '../cookies';

async function myDataService(callback){
    const username = Cookies.getCookie("username");
    const tkn = Cookies.getCookie("tkn");

    return await API.post(endpoints.myData, {username: username, token: tkn})
      .then( (response) => callback(response.data))
      .catch( (_) => alertSwal('Error', 'error'));
}

export default myDataService;