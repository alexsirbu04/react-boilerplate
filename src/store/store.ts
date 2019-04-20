import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { apiFactory } from '../api';
import { ENVS } from '../consts';
import reducer from './root';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: []
};

export const configureStore = () => {
	const api = apiFactory();

	const persistedReducer = persistReducer(persistConfig, reducer);
	const middleware =
		process.env.NODE_ENV === ENVS.DEV
			? composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ api })))
			: applyMiddleware(thunk.withExtraArgument({ api }));
	const store = createStore(persistedReducer, middleware);

	return store;
};
