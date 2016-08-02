import React from 'react';
import Main from '../components/Main';
const Home = require('../components/Home');
const Profile = require('../components/Profile');
import Sliders from '../components/Random/Sliders';
import { Route, IndexRoute } from './routeImport';

export default (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <Route path="sliders" component={Sliders} />
    <IndexRoute component={Home} />
  </Route>
);
