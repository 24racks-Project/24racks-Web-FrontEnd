import {API, endpoints, alertSwal} from './api';
import { verifyDataLoginUser } from './dataUser';
import Cookies from '../cookies';

async function buyServiceService(dataBuyService){
  dataBuyService.username = Cookies.getCookie("username");
  dataBuyService.token = Cookies.getCookie("tkn");

  if (verifyDataLoginUser(dataBuyService))
    return await API.post(endpoints.buyService, dataBuyService)
      .then( (response) =>  {
        console.log(response.data);
        window.location.assign(response.data.redirect)
      })
      .catch( (_) => alertSwal('Error en los datos', 'error'));
  else
    return alert("necesita loguearse");
}

export default buyServiceService;