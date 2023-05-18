import React from 'react';
import Home from './Homepage';

function App() {
  const [currentForm ,setCurrentForm]=useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }
  return (
    <Home/>
  );
}

export default App;