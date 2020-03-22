import React, {Fragment} from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import {
	Home
} from "./containers/";

/**
 * Manages the BrowserRouter and so, all the route navigation
 * @returns {*}
 * @constructor
 */
const Routes = () => {
	return (
		<Router>
			<Fragment>
				{/* Chooses the first route matching the direction and loads it */}
				<Switch>
					<Route path="/" component={Home} /> {/* Homepage - "/" */}
					<Route path="*" component={Home} /> {/* All the non existent pages redirects to the Home */}
				</Switch>
			</Fragment>
		</Router>
	);
};

export default Routes;