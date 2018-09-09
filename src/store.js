/** store **/

import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {createLogger} from 'redux-logger';

export const store = createStore(
  combineReducers({ }),
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
