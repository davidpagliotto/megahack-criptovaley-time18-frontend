import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import DashBoard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import BatchRegistration from '~/pages/BatchRegistration';

import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" component={DashBoard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/batch" component={BatchRegistration} isPrivate />
    </Switch>
  );
}
