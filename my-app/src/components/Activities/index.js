import React from 'react';
import './style.scss';

import { Switch, Route } from 'react-router-dom';

import Parks from './Parks';

const Activities = () => (
	<div className='activities'>
		<div className='activities_header'>
			<nav className='activities_navbar'>
				<ul>
					<li>
						<a href='/activities/parks'>parcs</a>
					</li>
					<li>sports</li>
					<li>Paysages</li>
					<li>soirées</li>
					<li>emplettes</li>
					<li>spécialités culinaires</li>
				</ul>
			</nav>
		</div>
		<div className='activities_category'>
			<Switch>
				<Route path='/activities/parks' exact>
					<Parks />
				</Route>
			</Switch>
		</div>
	</div>
);

export default Activities;
