/** reducers/tracks.js **/

import {types as typesTracks} from 'types/tracks';

const initialState = { 
  status:'',
  album:{},
  hash:{},
  messages:{
    max:1,
    counter:0,
    hash:{}
  }
};

export default (state = initialState, action = {}) => {
  switch(action.type) {

    case typesTracks.TRACKS_REQUEST:
      return {
        ...state,
        status:action.status,
        messages:{
          count:(state.messages.counter + 1),
          hash:{
            [state.messages.counter + 1]:{id:state.messages.counter + 1, status:"info", message:"fetching results for albums' tracks.", date:new Date()}
          }
        }
      };

    case typesTracks.TRACKS_SUCCESS:
      return {
        ...state,
        status:action.status,
        album:action.album,
        hash:action.hash,
        messages:{
          count:(state.messages.counter + 1),
          hash:{
            [state.messages.counter + 1]:{id:state.messages.counter + 1, status:"success", message:"acquired results for albums' tracks.", date:new Date()}
          }
        }
      };

    case typesTracks.TRACKS_ERROR:
      return {
        ...state,
        status:action.status,
        album:{},
        hash:{},
        messages:{
          count:(state.messages.counter + 1),
          hash:{
            [state.messages.counter + 1]:{id:state.messages.counter + 1, status:"error", message:"failed acquiring results for albums' tracks.", date:new Date()}
          }
        }
      };

    default: 
      return state;
  }
}
