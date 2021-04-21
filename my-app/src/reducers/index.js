import { combineReducers } from 'redux';

import userReducer from './userReducer';
import activitiesReducer from './activitiesReducer';

export default combineReducers({
	user: userReducer,
	activities: activitiesReducer,
});
