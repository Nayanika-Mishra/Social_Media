import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Addpost from './pages/Addpost';
import Profile from './pages/Profile';
import Home from './pages/Home';
//import {Switch} from 'react-router';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      
      <Switch>
         <Route exact path= '/'  component={()=><div>Hi</div>} />
         <Route exact path= '/addpost'  component={Addpost} />
         <Route exact path= '/profile' component={Profile} />
      </Switch>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
