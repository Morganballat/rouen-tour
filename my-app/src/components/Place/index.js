import React from 'react';
import './style.scss';

import WrappedMap from './Map';

const Place = () => (
	<div className='place'>
		<input
			className='place_input'
			type='text'
			placeholder='rechercher une adresse'
		/>
		<WrappedMap
			googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
			// &key=${process.env.REACT_APP_GOOGLEMAP_KEY}
			loadingElement={<div style={{ height: '100%' }} />}
			containerElement={<div style={{ height: '100%' }} />}
			mapElement={<div style={{ height: '100%' }} />}
		/>
	</div>
);

export default Place;
