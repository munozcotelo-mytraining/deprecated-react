import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './reducers/appReducer';

const appStore = createStore(appReducer, applyMiddleware(thunkMiddleware));

export { appStore };
