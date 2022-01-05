import { configureStore } from '@reduxjs/toolkit';
import { extensionApi } from './extensionAPI';

export const store = configureStore({
	reducer: {
		[extensionApi.reducerPath]: extensionApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(extensionApi.middleware),
});
