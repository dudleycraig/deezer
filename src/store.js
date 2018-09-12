/** store **/

import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import autocomplete from 'reducers/autocomplete';
import albums from 'reducers/albums';
import tracks from 'reducers/tracks';

export const store = createStore(
  combineReducers({ 
    autocomplete,
    albums,
    tracks
  }),
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
