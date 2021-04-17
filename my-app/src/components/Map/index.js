import React from 'react';
import './style.scss';

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
	return (
		<div className='map'>
			<input
				className='map_input'
				type='text'
				placeholder='rechercher une adresse'
			/>
			{/* <div style={{ width: '50vw', height: '50vh' }}> */}
			<GoogleMap
				defaultZoom={10}
				defaultCenter={{ lat: 49.443232, lng: 1.099971 }}
			></GoogleMap>
			{/* </div> */}
		</div>
	);
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
