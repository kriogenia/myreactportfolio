import React from "react";
import Spinner from "react-bootstrap/Spinner";

/**
 * @returns {div}	Spinner to display while loading components
 */
const Loader = () => (
	<div className="App">
		<Spinner animation="border" role="status" variant="primary">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>
);

export default Loader;