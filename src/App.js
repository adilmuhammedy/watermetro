import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Homepage';
import BookTickets from './bookticket';
import Terminals from './terminals';
import Login from './login';
import Register from './register';
import FareDetails from './fare';



function App() {
  return (
    <><Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bookticket" component={BookTickets} />
        <Route path="/terminals" component={Terminals} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/fare" component={FareDetails} />
      </Switch>
    </Router>
    </>
    
  );
}

export default App;