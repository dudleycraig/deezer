import React from 'react';
import {connect} from 'react-redux';

const About = props => {
  return (<div className="context" id="about"></div>);
};

const AboutContainer = connect(state => state)(About);

export {AboutContainer as About};
