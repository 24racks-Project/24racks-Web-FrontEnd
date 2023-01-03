import HomePageUser from './components/HPU/HPU';
import { Provider } from "react-redux";
import React, {useState, useEffect} from 'react'; 
import store from './store/index';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Support from './components/Support/Support';
import Cookies from './cookies';
import './App.css';

function InfoBar() {
  return <ul>
      <li className='elems'><AboutUs/></li>
      <li className='elems'><Contact/></li>
      <li className='elems'><Support/></li>
    </ul>;
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState(false)
  useEffect(() => {
    const username = Cookies.getCookie("username");
    const tkn = Cookies.getCookie("tkn");

    if (!(username && tkn) && isLogin) setLogin(false);
    else setLogin(true);
  }, [isLogin]);

  if(!login) return (
    <Provider store={store}>
      <div className='homePage'>
        <HomePageUser setIsLogin= {setIsLogin}/>
      </div>
      <div className='infoBar' align= 'left'>
        <InfoBar/>
      </div>
    </Provider>);
  return <div></div>;
}

export default App;
