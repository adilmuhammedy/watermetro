import React ,{useState} from 'react'

import Home from './Homepage';
import {Login} from './login';
import {Register} from './register';


function App() {
  const [currentForm ,setCurrentForm]=useState('login')
  return (
    <div className="App">{
      currentForm === "login" ? <Login /> : <Register/>
    }
    </div>
  );
}
  export default App;