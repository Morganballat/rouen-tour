import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style.scss';

import Header from '../Header';
import Home from '../Home';
import Street from '../Street';

function App() {
	return (
		<div className='app'>
			<Header />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/street' exact>
					<Street />
				</Route>
				<Route path='/street' exact>
					<Street />
				</Route>
				<Route path='/acts' exact>
					<Street />
				</Route>
				<Route path='/missions' exact>
					<Street />
				</Route>
				<Route path='/stories' exact>
					<Street />
				</Route>
				<Route path='/account' exact>
					<Street />
				</Route>
				<Route path='/logout' exact>
					<Street />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
