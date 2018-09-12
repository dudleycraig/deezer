/** reducers/albums.js **/

import {types as typesAlbums} from 'types/albums';

const initialState = { 
  hash:{},
  messages:{
    max:1,
    counter:0,
    hash:{}
  }
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case typesAlbums.ALBUMS_SUCCESS:
      return {
        ...state,
        status:(action.hash.length > 0 ? 'has-input' : 'has-no-input'),
        hash:action.hash,
        messages:{
          count:(state.messages.counter + 1),
          hash:{
            [state.messages.counter + 1]:{id:state.messages.counter + 1, status:"success", message:"acquired results for artists' albums.", date:new Date()}
          }
        }
      };

    case typesAlbums.ALBUMS_ERROR:
      return {
        ...state,
        status:'error',
        messages:{
          count:(state.messages.counter + 1),
          hash:{
            [state.messages.counter + 1]:{id:state.messages.counter + 1, status:"error", message:"failed acquiring results for artists' albums.", date:new Date()}
          }
        }
      };

    default: 
      return state;
  }
}
