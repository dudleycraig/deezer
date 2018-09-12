/** components/Autocomplete.js **/

import React from 'react';

const Autocomplete = props => {
  return <ul id="autocomplete" style={(Object.keys(props.autocomplete.hash).length > 0 && props.autocomplete.input !== '') ? {display:'block'} : {display:'none'}}>
  {Object.keys(props.autocomplete.hash).map(key => 
    <li key={key}>
      <a onClick={e => props.autocompleteClickHandler(props.autocomplete.hash[key].name)}>{props.autocomplete.hash[key].name}</a>
    </li>)}
  </ul>
};

export default Autocomplete;
