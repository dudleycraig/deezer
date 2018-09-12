/** containers/App.js **/

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import {Home} from 'containers/Home';
import {Search} from 'containers/Search';
import {About} from 'containers/About';

const crumb = (part, partIndex, parts) => {
  const path = ['', ...parts.slice(0, partIndex+1)].join("/");
  return <Link key={path} to={path} >{part}</Link>
};

const Breadcrumbs = () => (
  <Route path="*" render={
    props => {
      let parts = props.location.pathname.split('/');
      const place = parts[parts.length-1];
      parts = parts.slice(1, parts.length-1);
      return (
        <ul>
          <li className="crumb domain"><a href="deezer.functional.org.za">deezer.functional.org.za</a></li>
          <li className="separator">/</li>
          <li className="crumb">{place}</li>
        </ul>
      );
    }
  } />
);

const App = props => {
  return (
    <Router>
      <div>
        <div id="session">
          <span className="deezer-logo">
             <img src="images/logo.png" />
          </span>
          <span className="breadcrumbs">
            <Breadcrumbs />
          </span>
        </div>
        <ul className="navigation main">
          <li className="left"><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li className="middle"><NavLink exact activeClassName="active" to="/search">Search</NavLink></li>
          <li className="right"><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
};

const AppContainer = connect(
  state => state,
)(App);

export {AppContainer as App};
