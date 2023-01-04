import myDataService from "../../services/myDataService";

const defaultDataUser = {
    "username": "",
    "password": "",
    "email": "",
    "phone": ""
};

function reducer(dataUser = defaultDataUser, action){
    if(action.type === 'GET_DATA_USER') myDataService(action.data);

    return dataUser;
}

export default reducer;