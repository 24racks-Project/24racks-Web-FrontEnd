import {alertSwal} from './api';

function verifyEmail(email){
  return (/[a-zA-Z0-9_.-]+[^!#$%^&*()]@[a-zA-Z0-9_.-]+[^!#$%^&*()]/.test(email));
}

function verifyPassword(password){
    const passwordHaveSpecialCharacters = /\W|[_]/.test(password);
    const passwordHaveSpace = /\s/.test(password);
    const passwordHaveUpperCase = /^(?=.*[A-Z])/.test(password);

    return password.length >= 8 && passwordHaveSpecialCharacters && 
        passwordHaveUpperCase && !passwordHaveSpace;
}

function verifyName(name){
  const nameIsEmpty = name === "";
  const nameHaveSpace = /\s/.test(name);

  return !nameIsEmpty & !nameHaveSpace;
}

function verifyDataUser(dataUser){
  if (!verifyName(dataUser.username)){
    alertSwal('El nombre no puede estar vacío ni contener espacios', 'warning');
    return false;
  } else if(!verifyPassword(dataUser.password)){
    alertSwal('La contraseña es inválida', 'warning');
    return false;
  } else if(!verifyEmail(dataUser.email)){
    alertSwal('La dirección de correo es inválida', 'warning');
    return false;
  }
  return true;
}

function verifyDataLoginUser(dataLoginUser) {
    return (dataLoginUser.username !== "" && dataLoginUser.password !== "");
}

export {verifyDataUser, verifyDataLoginUser, verifyPassword};