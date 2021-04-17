import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style.scss';

import Header from '../Header';
import Home from '../Home';
import WrappedMap from '../Map';

function App() {
	return (
		<div className='app'>
			<Header />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/map' exact>
					<div>
						<WrappedMap
							googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
							// &key=${process.env.REACT_APP_GOOGLEMAP_KEY}
							loadingElement={<div style={{ height: '100%' }} />}
							containerElement={<div style={{ height: '100%' }} />}
							mapElement={<div style={{ height: '100%' }} />}
						/>
					</div>
				</Route>

				<Route path='/acts' exact>
					{/* <Map /> */}
				</Route>
				<Route path='/missions' exact>
					{/* <Map /> */}
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
