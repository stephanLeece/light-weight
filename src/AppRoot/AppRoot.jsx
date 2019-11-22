import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Plan from 'pages/Plan';
import Progress from 'pages/Progress';
import Session from 'pages/Session';
import MenuNub from 'layout/Nav/MenuNub';
import { GlobalStyledReset } from './styled';

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
