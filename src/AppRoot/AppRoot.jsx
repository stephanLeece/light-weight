import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import MenuNub from 'layout/Nav/MenuNub';
import PageLoader from 'layout/Loader/Page';
import { GlobalStyledReset } from './styled';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ 'pages/Home'),
  loading: PageLoader,
});

const Plan = Loadable({
  loader: () => import(/* webpackChunkName: "Plan" */ 'pages/Plan'),
  loading: PageLoader,
});

const Progress = Loadable({
  loader: () => import(/* webpackChunkName: "Progress" */ 'pages/Progress'),
  loading: PageLoader,
});

const Session = Loadable({
  loader: () => import(/* webpackChunkName: "Session" */ 'pages/Session'),
  loading: PageLoader,
});
const Root = () => (
  <React.Fragment>
    <GlobalStyledReset />
    <MenuNub />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/plan" component={Plan} />
      <Route exact path="/progress" component={Progress} />
      <Route exact path="/session" component={Session} />
    </Switch>
  </React.Fragment>
);

export default Root;
