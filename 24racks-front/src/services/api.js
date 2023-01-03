//import swal from 'sweetalert';
import axios from "axios";

const URL = 'http://localhost:8000/'; 
const endpoints = {
        register: '/register',
        login: '/login'
};

function alertSwal(msg, icon){
        alert(msg); 
}

function getUserLogin(){
        const user = JSON.parse(localStorage.getItem('user'));
        const userlogin = (user)? user.userlogin : '';
    
        return userlogin;    
}

function getToken(){
        const user = JSON.parse(localStorage.getItem('user'));
        const token = (user)? user.token : '';
    
        return token;
}    
const API = axios.create({ baseURL: URL, timeout: 0 });

export {API, alertSwal, getToken, getUserLogin, endpoints};