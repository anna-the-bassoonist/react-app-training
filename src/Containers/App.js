import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Menu from '../Components/Menu';
import Home from './Home';
import Events from './Events';
import Cards from './Cards';
import Contact from './Contact';

const App = () => (
  <Router>
    <div className="App">
      <Menu />
      <br />
      <br />
      <br />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Events} path="/events" />
        <Route component={Cards} path="/cards" />
        <Route component={Contact} path="/contact" />
      </Switch>
      {/* <Unicorn
    hidden="true"
  /> */}
    </div>
  </Router>
);


export default App;

