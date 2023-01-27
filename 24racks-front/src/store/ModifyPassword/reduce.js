import modifyPasswordService from "../../services/modifyPasswordService";

const defaultDataModifyPassword = {
    "token": "",
    "currentPassword": "",
    "newPassword": ""
};

function reducer(dataModifyPassword = defaultDataModifyPassword, action){
    const  dataUserPassChange = ({attribute, value}) => {
        return { 
            ...dataModifyPassword, 
            [attribute]: value
        }; 
    };
    
    if (action.type === 'GET_CURRENT_PASSWORD') return dataUserPassChange({attribute:'currentPassword', value: action.data});
    else if (action.type === 'GET_NEW_PASSWORD') return dataUserPassChange({attribute:'newPassword', value: action.data});
    else if (action.type === 'SEND_NEW_PASSWORD') modifyPasswordService(dataModifyPassword);
    
    return dataModifyPassword;
}

export default reducer;