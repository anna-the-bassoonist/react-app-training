import React from 'react';
import './App.css';
import Menu from '../Components/Menu';
import Home from './Home';
import Events from './Events';
import Cards from './Cards';
import Text from '../Components/Grid';

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
    <Text />

  </div>
);

export default App;

