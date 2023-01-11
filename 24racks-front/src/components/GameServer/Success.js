import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import addServGameService from "../../services/addServGameService";

function Success(){
    const {username, token, id_service, id_plan, id_transaction} = useParams();
    console.log(username, token, id_service, id_plan, id_transaction);
    
    useEffect(
        () => {
            addServGameService({
                "username":username, 
                "token":token, 
                "id_service":id_service, 
                "id_plan":id_plan, 
                "id_transaction":id_transaction
            })
    }, []);

    return <di>
        <h1>Pago realizado con éxito</h1>
    </di>
}

export default Success;