import React, {Fragment} from "react";
import {
	HashRouter as Router,
	Switch
} from "react-router-dom";
import { Home, Portfolio } from "./containers/";
import { PublicLayout } from "./layouts";

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
					<PublicLayout component={Home} 		path={"/bio"} 		exact/> {/* Bio - "/bio" */}
					<PublicLayout component={Portfolio} path={"/portfolio"} exact/> {/* Portfolio - "/portfolio" */}
					<PublicLayout component={Home} path="*"/> {/* All the non existent pages redirects to the Home */}
				</Switch>
			</Fragment>
		</Router>
	);
};

export default Routes;