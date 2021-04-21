export const initialState = {
	parks: [
		{
			id: 1,
			name: 'parc imaginaire',
			address: 'Palais de Dieu',
			description: 'un parc merveilleux',
			picture: 'unephot',
		},
		{
			id: 2,
			name: 'parc imaginaire',
			address: 'Palais de Dieu',
			description: 'un parc merveilleux',
			picture: 'unephot',
		},
	],
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		default:
			return state;
	}
};
