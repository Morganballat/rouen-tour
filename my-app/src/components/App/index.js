import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style.scss';

import Header from '../Header';
import Home from '../Home';
import Map from '../Map';

function App() {
	return (
		<div className='app'>
			<Header />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/map' exact>
					<Map />
				</Route>

				<Route path='/acts' exact>
					<Map />
				</Route>
				<Route path='/missions' exact>
					<Map />
				</Route>
				<Route path='/stories' exact>
					<Map />
				</Route>
				<Route path='/account' exact>
					<Map />
				</Route>
				<Route path='/logout' exact>
					<Map />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
