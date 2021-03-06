import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Loader} from "./components";
import "./i18n";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./bootstrap.min.css";

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<App/>
		</Suspense>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
