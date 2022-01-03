import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

export default function store () {
	return configureStore({ reducer });
}
