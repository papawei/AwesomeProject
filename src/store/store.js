
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from '../reducers/reducer';

const middleWares = [
  thunkMiddleware,
];

if (__DEV__) {
  middleWares.unshift(createLogger());
}

const createStoreWithMiddleware = applyMiddleware(
  ...middleWares
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);
  return store;
}
