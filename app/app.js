import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';


export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>{routes}</Router>
    )
  }
}
