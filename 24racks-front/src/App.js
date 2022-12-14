import HomePageUser from './components/HPU/HPU';
import React, {useState} from 'react' 

function App() {
  const [login, setLogin] = useState(false);
  
  React.useEffect(() => {
    if (localStorage.getItem("user")) setLogin(true)
    else setLogin(false);
  }, []);

  if(!login) return (<HomePageUser/>);
}

export default App;
