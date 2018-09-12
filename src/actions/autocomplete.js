/** actions/autocomplete **/

import {types as typesAutocomplete} from 'types/autocomplete';

export const updateAutocompleteMode = mode => {
  return dispatch => {
    dispatch({type:typesAutocomplete.AUTOCOMPLETE_UPDATE_MODE, mode:mode});
  }
};

export const updateAutocompleteInput = input => {
  return dispatch => {
    dispatch({type:typesAutocomplete.AUTOCOMPLETE_UPDATE_INPUT, input:input});
  }
};

export const updateAutocompleteStatus = status => {
  return dispatch => {
    dispatch({type:typesAutocomplete.AUTOCOMPLETE_UPDATE_STATUS, status:status});
  }
};

export const autocompleteSuccessHandler = results => {
  return dispatch => {
    dispatch({
      type:typesAutocomplete.AUTOCOMPLETE_SUCCESS, 
      hash:results.reduce((items, item) => (items[item.id] = item, items), {})
    });
  }
}

export const autocompleteErrorHandler = error => {
  return dispatch => {
    dispatch({type:typesAutocomplete.AUTOCOMPLETE_ERROR});
  }
}

export const autocompleteSearch = input => {
  const query = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/autocomplete?q=' + input;
  return dispatch => {
    return fetch(query, {method:'get'})
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
