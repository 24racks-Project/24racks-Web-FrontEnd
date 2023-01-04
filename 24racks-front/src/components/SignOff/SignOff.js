import Cookies from "../../cookies";

function SignOff({setIsLogin}) {
  Cookies.deleteCookie("username");
  Cookies.deleteCookie("tkn");
  setIsLogin(false);
}

export default SignOff;