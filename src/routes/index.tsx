import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import MyRepositories from '../pages/MyRepositories';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository" component={Repository} />
    <Route path="/myservices" component={MyRepositories} />
  </Switch>
);

export default Routes;
