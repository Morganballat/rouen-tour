import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

import userMiddlewares from '../middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(userMiddlewares));

const store = createStore(reducer, enhancers);

export default store;
