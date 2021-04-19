import React from 'react';
import './style.scss';

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
	return (
		<div className='map'>
			<GoogleMap
				defaultZoom={13}
				defaultCenter={{ lat: 49.443232, lng: 1.099971 }}
			></GoogleMap>
		</div>
	);
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
