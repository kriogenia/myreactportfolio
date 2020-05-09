import React from "react";
import "./spacer.component.css";

/**
 * @param height	Desired height
 * @returns {div}	Empty div to space things vertically
 */
const Spacer = ({height}) => {
	return (
		<div className={"w-100"} style={{height: height}}>
			&nbsp;
		</div>
	);
};

export default Spacer;