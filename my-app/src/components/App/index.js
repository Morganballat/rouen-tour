import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './style.scss';

import Header from '../Header';
import Home from '../Home';
import Place from '../Place';
import Activities from '../Activities';

function App() {
	return (
		<div className='app'>
			<Header />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/place' exact>
					<Place />
				</Route>
				<Route path='/activities'>
					<Activities />
				</Route>
				<Route path='/stories' exact>
					{/* <Map /> */}
				</Route>
				<Route path='/account' exact>
					{/* <Map /> */}
				</Route>
				<Route path='/logout' exact>
					{/* <Map /> */}
				</Route>
			</Switch>
		</div>
	);
}

export default App;
