import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Support from './components/Support/Support';
import HomePage from './components/HPU/HPU';
import { Provider } from "react-redux";
import store from './store/index';
import React from 'react'; 
import './App.css';

function InfoBar() {
  return <ul>
      <li className='elems'><AboutUs/></li>
      <li className='elems'><Contact/></li>
      <li className='elems'><Support/></li>
    </ul>;
}

function App() {
  return (
    <Provider store={store}>
      <div className='homePage'>
        <HomePage/>
      </div>
      <div className='infoBar' align= 'left'>
        <InfoBar/>
      </div>
    </Provider>);
}

export default App;
