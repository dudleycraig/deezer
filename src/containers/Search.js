import React from 'react';
import {connect} from 'react-redux';

const Search = props => {
  return (
    <div className="context" id="search">
      <form className="inline">
        <input 
          type="text" 
          placeholder="Search albums by artist name"
          value=""
        />
        <input 
          type="submit" 
          value="Search" 
        />
      </form>
    </div>
  );
};

const SearchContainer = connect(state => state)(Search);

export {SearchContainer as Search};
