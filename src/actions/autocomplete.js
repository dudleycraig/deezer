/** actions/autocomplete **/

import {types as typesAutocomplete} from 'types/autocomplete';

export const updateAutocompleteMode = mode => {
  return dispatch => {
    dispatch({
      type:typesAutocomplete.AUTOCOMPLETE_UPDATE_MODE, 
      mode:mode
    });
  }
};

export const updateAutocompleteInput = input => {
  return dispatch => {
    dispatch({
      type:typesAutocomplete.AUTOCOMPLETE_UPDATE_INPUT, 
      input:input
    });
  }
};

export const autocompleteRequestHandler = results => {
  return dispatch => {
    dispatch({
      type:typesAutocomplete.AUTOCOMPLETE_REQUEST, 
      status:'loading'
    });
  }
}

export const autocompleteSuccessHandler = results => {
  return dispatch => {
    dispatch({
      type:typesAutocomplete.AUTOCOMPLETE_SUCCESS, 
      status:'',
      hash:results.reduce((items, item) => (items[item.id] = item, items), {})
    });
  }
}

export const autocompleteErrorHandler = error => {
  return dispatch => {
    dispatch({
      type:typesAutocomplete.AUTOCOMPLETE_ERROR,
      status:''
    });
  }
}

export const autocompleteSearch = input => {
  const query = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/autocomplete?q=' + input;
  return dispatch => {
    dispatch(autocompleteRequestHandler());
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
      .then(({data, next, total}) => dispatch(autocompleteSuccessHandler(data)))
      .catch(error => dispatch(autocompleteErrorHandler(error)));
  }
}
