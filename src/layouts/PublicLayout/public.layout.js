import React from "react";
import {Route} from "react-router-dom";
import {Footer, NavBar, Spacer} from "../../components";

/**
 * Builds a Route decorating the component with the NavBar and footer
 * @param props	Contains the Component and the path
 */
const PublicLayout = (props) => {

	const { component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			component={({ history, location, match }) => (
				<div>
					<NavBar/>
					<Component {...{ history, location, match }} />
					<Spacer height={100}/>
					<Footer/>
				</div>
			)}
		/>
	);
};

export default PublicLayout;