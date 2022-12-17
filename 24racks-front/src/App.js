import HomePageUser from './components/HPU/HPU';
import { Provider } from "react-redux";
import React, {useState} from 'react'; 
import store from './store/index';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Support from './components/Support/Support';
import './App.css';

function InfoBar() {
  return <ul>
      <li className='elems'><AboutUs/></li>
      <li className='elems'><Contact/></li>
      <li className='elems'><Support/></li>
    </ul>;
}

function App() {
  const [login, setLogin] = useState(false);
  
  React.useEffect(() => {
    if (localStorage.getItem("user")) setLogin(true)
    else setLogin(false);
  }, []);

  if(!login) return (
    <Provider store={store}>
      <div className='homePage'>
        <HomePageUser/>
      </div>
      <div className='infoBar' align= 'left'>
        <InfoBar/>
      </div>
    </Provider>);
}

export default App;
