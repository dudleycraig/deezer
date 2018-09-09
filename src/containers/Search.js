import React from 'react';
import {connect} from 'react-redux';

const Search = props => {
  return (<div className="context" id="search"></div>);
};

const SearchContainer = connect(state => state)(Search);

export {SearchContainer as Search};
