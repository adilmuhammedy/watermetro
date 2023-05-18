import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Homepage';
import BookTickets from './bookticket';
import Terminals from './terminals';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bookticket" component={BookTickets} />
        <Route path="/terminals" component={Terminals} />
      </Switch>
    </Router>
  );
}

export default App;