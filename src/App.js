import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import HomePage from './Homepage';
import LoginPage from './login';
import RegisterPage from './register';


function App() {
  return (
    <><Router>
      <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route path="/login" component={LoginPage}/>
         <Route path="/register" component={RegisterPage}/>
         </Switch>
    </Router>
    </>
    
  );
}

export default App;