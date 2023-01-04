import Cookies from '../cookies';
import {API, endpoints, alertSwal} from './api';
import { verifyPassword } from './dataUser';

async function modifyPasswordService(dataModifyPassword){
    dataModifyPassword.token = Cookies.getCookie("tkn"); 
    if(verifyPassword(dataModifyPassword.newPassword)) 
      return await API.post(endpoints.newPassword, dataModifyPassword)
        .then( (_) =>  alertSwal('Contraseña modificada', 'success'))
        .catch( (_) => alertSwal('Error en los datos', 'error'));
    else alertSwal('Error en los datos', 'error');
}

export default modifyPasswordService;