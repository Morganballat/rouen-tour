import React from 'react';
import './style.scss';

// import ReactMapGl from 'react-map-gl';

const Map = () => {
	// const [viewport, setViewport] = useState({
	// 	latitude: 45.4211,
	// 	longitude: -75.6903,
	// 	with: '100vw',
	// 	height: '100vh',
	// 	zoom: 10,
	// });
	return (
		<div className='map'>
			<input
				className='map_input'
				type='text'
				placeholder='rechercher une adresse'
			/>
			{/* <ReactMapGl
				{...viewport}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
				onViewportChange={(viewport) => {
					setViewport(viewport);
				}}
			>
				markers here
			</ReactMapGl> */}
		</div>
	);
};

export default Map;
