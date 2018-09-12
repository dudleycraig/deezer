/** store **/

import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import autocomplete from 'reducers/autocomplete';
import albums from 'reducers/albums';

export const store = createStore(
  combineReducers({ 
    autocomplete,
    albums
  }),
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
