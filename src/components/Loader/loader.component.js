import React from "react";
import Spinner from "react-bootstrap/Spinner";

// Helds the app while loading
const Loader = () => (
	<div className="App">
		<Spinner animation="border" role="status" variant="primary">
			<span className="sr-only">Loading...</span>
		</Spinner>
	</div>
);

export default Loader;