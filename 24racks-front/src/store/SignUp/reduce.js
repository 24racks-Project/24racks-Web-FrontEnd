import signUpService from "../../services/signUpService";
const defaultDataUser = {
    "username": "",
    "password": ""
};

function reducer(dataUser = defaultDataUser, action){
    const  dataUserChange = ({attribute, value}) => {
        return { 
            ...dataUser, 
            [attribute]: value
        }; 
    };
    
    if (action.type === 'DATA_NAME') return dataUserChange({attribute:'username', value: action.data});
    else if (action.type === 'DATA_PASS') return dataUserChange({attribute:'password', value: action.data});
    else if(action.type === 'SEND_DATA_LOGIN') signUpService(dataUser, action.data);

    return dataUser;
}

export default reducer;