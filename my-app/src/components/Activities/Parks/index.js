import React from 'react';
import './style.scss';

const Parks = ({ parks }) => {
	console.log(parks);

	const parksList = parks.map((park) => (
		<div className='parks_park'>
			<div className='parks_park-name'>Parc: {park.name}</div>
			<div className='parks_park-address'>Adresse: {park.address}</div>
			<div className='parks_park-description'>
				Description: {park.description}
			</div>
		</div>
	));

	return (
		<div className='parks'>
			<div className='parks_add'>
				<form className='parks_add-form'>
					<input type='text' name='name' placeholder='nom du parc' />
					<input type='text' placeholder='Adresse du parc' />{' '}
					<textarea
						type='text'
						name='description'
						placeholder='description du parc'
					/>
				</form>
				<button type='submit' className='parks_button-sub'>
					Ajouter un parc
				</button>
			</div>
			<div className='parks_list'>
				<div className='parks_list-title'>listes de parcs</div>
				{parksList}
			</div>
		</div>
	);
};

export default Parks;
