import {API, endpoints, alertSwal} from './api';
import { verifyDataLoginUser } from './dataUser';

async function addServGameService(dataBuyService){
  if (verifyDataLoginUser(dataBuyService))
    return await API.post(endpoints.saveGameService, dataBuyService);
}

export default addServGameService;