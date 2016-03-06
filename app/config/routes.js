import React from 'react';
import Main from '../components/Main';
const Home = require('../components/Home');
const Profile = require('../components/Profile');
const Router = require('react-router');
const Route = Router.Route;
const IndexRoute = Router.IndexRoute;

export default (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
