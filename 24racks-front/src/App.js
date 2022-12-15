import HomePageUser from './components/HPU/HPU';
import { Provider } from "react-redux";
import React, {useState} from 'react'; 
import store from './store/index';

function App() {
  const [login, setLogin] = useState(false);
  
  React.useEffect(() => {
    if (localStorage.getItem("user")) setLogin(true)
    else setLogin(false);
  }, []);

  if(!login) return (<Provider store={store}><HomePageUser/></Provider>);
}

export default App;
