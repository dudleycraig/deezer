/** store **/

import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import autocomplete from 'reducers/autocomplete';

export const store = createStore(
  combineReducers({ 
    autocomplete
  }),
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
