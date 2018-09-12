/** actions/tracks **/

import {types as tracksTypes} from 'types/tracks';

export const querySuccess = (results, album) => {
  return dispatch => {
    dispatch({
      type:tracksTypes.TRACKS_SUCCESS, 
      album:album, 
      hash:results.reduce((tracks, track) => (tracks[track.id] = track, tracks), {})
    });
  }
}

export const queryFailure = error => {
  return dispatch => {
    dispatch({type:tracksTypes.TRACKS_ERROR});
  }
}

export const tracksSearch = album => {
  const query = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + album.id + '/tracks';
  return dispatch => {
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
      .then(({data, next, total}) => dispatch(querySuccess(data, album)))
      .catch(error => dispatch(queryFailure(error)));
  }
}

export const getTracks = album => {
  return dispatch => {
    dispatch({type:tracksTypes.TRACKS_GET_TRACKS, album:album});
  }
};
