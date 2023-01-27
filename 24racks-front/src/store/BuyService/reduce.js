import buyServiceService from "../../services/buyServiceService";


const defaultDataBuyService = {
    "id_service": 0,
    "id_plan": 0,
    "token": "",
    "username": ""
};

function reducer(dataBuyService = defaultDataBuyService, action){
    const  dataCardChange = ({attribute, value}) => {
        return { 
            ...dataBuyService, 
            [attribute]: value
        }; 
    };

    if(action.type === 'POST_DATA_GAME') return dataCardChange({attribute:'id_service', value: action.data});
    else if(action.type === 'POST_DATA_PLAN') return dataCardChange({attribute:'id_plan', value: action.data});
    else if(action.type === 'SEND_DATA_PLAN') buyServiceService(dataBuyService);

    return dataBuyService;
}

export default reducer;