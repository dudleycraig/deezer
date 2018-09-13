/** actions/tracks **/

import {types as tracksTypes} from 'types/tracks';

export const tracksRequest = () => {
  return dispatch => {
    dispatch({
      type:tracksTypes.TRACKS_ERROR,
      status:'loading'
    });
  }
}

export const tracksSuccess = (results, album) => {
  return dispatch => {
    dispatch({
      type:tracksTypes.TRACKS_SUCCESS, 
      status:'',
      album:album, 
      hash:results.reduce((tracks, track) => (tracks[track.id] = track, tracks), {})
    });
  }
}

export const tracksFailure = error => {
  return dispatch => {
    dispatch({
      type:tracksTypes.TRACKS_ERROR,
      status:error
    });
  }
}

export const tracksSearch = album => {
  const query = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + album.id + '/tracks';
  return dispatch => {
    dispatch(tracksRequest());
    return fetch(query, {method:'get', mode:'cors'})
      .then(response => {
          if(!response.ok) {
            throw Error('Failed querying Deezer.'); 
          }
          else {
            return response;
          }
      })
      .then(response => response.json())
      .then(({data, next, total}) => dispatch(tracksSuccess(data, album)))
      .catch(error => dispatch(tracksFailure(error)));
  }
}

export const getTracks = album => {
  return dispatch => {
    dispatch({type:tracksTypes.TRACKS_GET_TRACKS, album:album});
  }
};
