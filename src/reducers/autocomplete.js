/** reducers/autocomplete.js **/

import {types as typesAutocomplete} from 'types/autocomplete';

const initialState = { 
  mode:'artist',
  status:'no-input',
  input:'',
  hash:{},
  messages:{
    max:1,
    counter:0,
    hash:{}
  }
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case typesAutocomplete.AUTOCOMPLETE_UPDATE_MODE: 
      return {
        ...state, 
        mode:action.mode
      };

    case typesAutocomplete.AUTOCOMPLETE_UPDATE_INPUT: 
      return {
        ...state, 
        input:action.input,
        status:(action.input !== '' ? 'has-input' : 'has-no-input'),
        hash:{}
      };

    case typesAutocomplete.AUTOCOMPLETE_UPDATE_STATUS: 
      return {
        ...state, 
        status:action.status
      };

    case typesAutocomplete.AUTOCOMPLETE_SUCCESS:
      return {
        ...state,
        status:(action.input !== '' ? 'has-input' : 'has-no-input'),
        hash:action.hash,
        messages:{
          count:(state.messages.counter + 1),
          hash:{
            [state.messages.counter + 1]:{id:state.messages.counter + 1, status:"success", message:"updated autocomplete list.", date:new Date()}
          }
        }
      };

    case typesAutocomplete.AUTOCOMPLETE_ERROR:
      return {
        ...state,
        status:'error',
        messages:{
          count:(state.messages.counter + 1),
          hash:{
            [state.messages.counter + 1]:{id:state.messages.counter + 1, status:"error", message:"received error while updating autocomplete list.", date:new Date()}
          }
        }
      };

    default: 
      return state;
  }
}
