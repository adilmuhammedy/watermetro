import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Homepage';
import BookTickets from './bookticket';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/book-tickets" component={BookTickets} />
      </Switch>
    </Router>
  );
}

export default App;