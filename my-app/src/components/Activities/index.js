import React from 'react';

import { Switch, Route } from 'react-router-dom';
import './style.scss';

import MenuActivities from './MenuActivities';
import Parks from '../../containers/Activities/Parks';
import Sports from './Sports';

const Activities = () => (
	<div className='activities'>
		<MenuActivities />
		<Switch>
			<Route exact path='/activities/parks'>
				<Parks />
			</Route>
			<Route path='/activities/sports'>
				<Sports />
			</Route>
		</Switch>
	</div>
);

export default Activities;
