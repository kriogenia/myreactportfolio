import React from "react";
import "./spacer.component.css";

const Spacer = ({height}) => {
	return (
		<div className={"w-100"} style={{height: height}}>
			&nbsp;
		</div>
	);
};

export default Spacer;