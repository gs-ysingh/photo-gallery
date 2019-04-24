import React from "react";
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Posts from './components/Posts/Posts.jsx';
import Comments from './components/Comments/Comments.jsx';

const Routes = () => (
  <Switch>
    <Route exact component={Landing} path='/' />
    <Route component={Posts} path='/posts/:id' />
    <Route component={Comments} path='/comments/:id' />
  </Switch>
);

export default Routes;