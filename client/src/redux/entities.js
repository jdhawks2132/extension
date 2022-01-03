import { combineReducers } from 'redux';
import coursesReducer from './courses';
import reviewsReducer from './reviews';

export default combineReducers({
	courses: coursesReducer,
	reviews: reviewsReducer,
});
