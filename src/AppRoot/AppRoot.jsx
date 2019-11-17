import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import MenuNub from 'layout/Nav/MenuNub';
import { GlobalStyledReset } from './styled';

const Root = () => (
	<React.Fragment>
		<GlobalStyledReset />
		<MenuNub />
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</React.Fragment>
);

export default Root;
