import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './reducers/appReducer';
import { loggerMiddleware } from './middlewares/loggerMiddleware';

const appStore = createStore(
  appReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

export { appStore };
