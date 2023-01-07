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

function verifyLogin(dataUser) {
  return (dataUser.username !== "" && dataUser.tkn !== "");
}

function verifyCardholderName(cardholderName) {
  const validName = cardholderName !== "";
  const NameNotHaveCharacterSpecial = !(/\W|[_]/.test(cardholderName));

  return validName && NameNotHaveCharacterSpecial;
}

function verifyCardNumber(cardNumber) {
  const validValue = cardNumber.toString().length === 16;

  return validValue;
}
function verifyDateExpi(dateExpi) {
  const validDate = /^[0-3][0-9]\/[0-9][0-9]$/.test(dateExpi);

  return validDate;
}

function verifyCVC(CVC) {
  const validCVC = CVC.toString().length === 3;
  return validCVC;
}

function verifyDataCard(dataCard) {
  if (!verifyLogin(dataCard)) return alert("User not logged in");
  if (!verifyCardholderName(dataCard.cardholderName)) return alert("invalide cardholder name");
  else if (!verifyCardNumber(dataCard.cardNumber)) return alert("Invalid card number");
  else if (!verifyDateExpi(dataCard.dateExpi)) return alert("Invalid date expire");
  else if (!verifyCVC(dataCard.CVC)) return alert("Invalid CVC");
  return true;
}

export {verifyDataUser, verifyDataLoginUser, verifyPassword, verifyDataCard};
