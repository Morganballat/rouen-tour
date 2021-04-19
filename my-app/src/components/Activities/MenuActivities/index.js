import React from 'react';
import './style.scss';

const MenuActivities = () => (
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
);

export default MenuActivities;
