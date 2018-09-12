import React from 'react';
import {connect} from 'react-redux';
import {autocompleteSearch, updateAutocompleteInput} from 'actions/autocomplete';
import Autocomplete from 'components/Autocomplete';

const Search = props => {
  const autocompleteSearchHandler = event => {
    props.updateAutocompleteInput(event.target.value);
    if(event.target.value !== '') {
      props.autocompleteSearch(event.target.value);
    }
  }

  const autocompleteClickHandler = input => {
    props.updateAutocompleteInput(input);
  };

  return (
    <div className="context" id="search">
      <form className="inline">
        <input 
          type="text" 
          placeholder="Search albums by artist name"
          value={props.autocomplete.input}
          onChange={e => autocompleteSearchHandler(e)}
        />
        <input 
          type="submit" 
          value="Search" 
        />
        <ul className="messages search" style={(Object.keys(props.autocomplete.messages.hash).length > 0 && props.autocomplete.input !== '') ? {display:'block'} : {display:'none'}}>
        { 
          Object.keys(props.autocomplete.messages.hash).length > 0 && 
          Object.keys(props.autocomplete.messages.hash).reverse().map(key => {
            const message = props.autocomplete.messages.hash[key];
            return (
              <li key={key} className={message.status}>
                <span className="time">
                  <span className="hours">{('0' + message.date.getHours()).slice(-2)}</span>
                  <span className="minutes">{('0' + message.date.getMinutes()).slice(-2)}</span>
                  <span className="seconds">{('0' + message.date.getSeconds()).slice(-2)}</span>
                  <span className="milliseconds">{('00' + message.date.getMilliseconds()).slice(-3)}</span>
                </span>
                <span className="separator greater-than">&gt;</span>
                <span className="message">{message.message}</span>
              </li>
            );
          })
        }
        </ul>
      </form>
      <Autocomplete autocomplete={props.autocomplete} autocompleteClickHandler={autocompleteClickHandler} />
    </div>
  );
};

const SearchContainer = connect(
  state => state,
  {autocompleteSearch, updateAutocompleteInput}
)(Search);

export {SearchContainer as Search};
