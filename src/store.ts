import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { connectRoutes } from 'redux-first-router';
import createSagaMiddleware from 'redux-saga';

import reducers from './modules/reducers';
import routesMap from './routesMap';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

const { reducer, middleware } = connectRoutes(routesMap);

const rootReducer = combineReducers({ location: reducer, ...reducers });
const store = configureStore({ reducer: rootReducer,  middleware: [middleware, sagaMiddleware]});

export type LocationState = ReturnType<typeof reducer>;
export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);

export default store;
