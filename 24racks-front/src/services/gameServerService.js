import {API, endpoints, alertSwal} from './api';

async function gameServerService(setDataGameOptions){
    return await API.get(endpoints.gameServer)
      .then( (response) => {
        setDataGameOptions(response.data.games);
    })
      .catch( (_) => alertSwal('Error en los datos', 'error'));
}

export default gameServerService;