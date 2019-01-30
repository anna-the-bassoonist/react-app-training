import React from 'react';
import './App.css';
import Menu from '../Components/Menu';
import Home from './Home';
import Events from './Events';
import Cards from './Cards';
import Contact from './Contact';

const App = () => (
  <div className="App">
    <Menu />
    <Home />
    <hr />
    <Events />
    {/* <Unicorn
          hidden="true"
        /> */}
    <hr />
    <Cards />
    <hr />
    <Contact />

  </div>
);

export default App;

