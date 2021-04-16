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
			</Switch>
		</div>
	);
}

export default App;
