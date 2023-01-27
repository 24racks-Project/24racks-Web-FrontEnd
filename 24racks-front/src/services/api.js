//import swal from 'sweetalert';
import axios from "axios";

const URL = 'https://shan.loca.lt'; 
const endpoints = {
        register: '/register',
        login: '/login',
        myData: "/dataUser",
        newPassword: "/newPassword",
        gameServer: "/gamesServer",
        buyService: "/buyService",
        saveGameService: "/saveGameService"
};

function alertSwal(msg, icon){
        alert(msg); 
}

const API = axios.create({ baseURL: URL, timeout: 0 });

export {API, alertSwal, endpoints};