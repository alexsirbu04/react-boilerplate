import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Login } from '../pages';

export const Routes: React.FC = () => (
	<Router>
		<Route exact path="/" render={() => <Login />} />
	</Router>
);
