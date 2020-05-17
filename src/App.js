import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/Homepage';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

function App() {
  return (
    <Switch>
    	<Route exact path ='/' component={Homepage} />
    	<Route path='/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
