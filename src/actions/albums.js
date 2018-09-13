/** actions/albums **/

import {types as typesAlbums} from 'types/albums';

export const albumsRequestHandler = input => {
  return dispatch => {
    dispatch({
      type:typesAlbums.ALBUMS_REQUEST, 
      status:'loading'
    });
  }
}

export const albumsSuccessHandler = results => {
  return dispatch => {
    dispatch({
      type:typesAlbums.ALBUMS_SUCCESS, 
      status:'',
      hash:results.map(row => row.album).filter((album, index, albums) => albums.map(item => item['id']).indexOf(album['id']) === index).reduce((albums, album) => (albums[album.id] = album, albums), {})
    });
  }
}

export const albumsErrorHandler = error => {
  return dispatch => {
    dispatch({
      type:typesAlbums.ALBUMS_ERROR,
      status:'error'
    });
  }
}

export const albumsSearch = input => {
  const query = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"' + input + '"';
  return dispatch => {
    dispatch(albumsRequestHandler());
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
      .then(({data, next, total}) => dispatch(albumsSuccessHandler(data)))
      .catch(error => dispatch(albumsErrorHandler(error)));
  }
}

