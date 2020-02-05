import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import BrowsePage from './components/BrowsePage';
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Link, Switch} from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = '/' component={Login} />
      <Route path = '/register' component={Register}/>
      <PrivateRoute path = '/browse' component={BrowsePage}/>
      <PrivateRoute path = '/dashboard' component={Dashboard}/>
      {/* <PrivateRoute exact path='/dashboard' component={Dashboard} /> /> */}

    </div>
    </Router>
  );
}

export default App;
