import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Addpost from './pages/Addpost';
import Profile from './pages/Profile';
import Home from './pages/Home';

//import {Switch} from 'react-router';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addpost" component={Addpost} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>

  );
}

export default App;
