import React from "react";
import "./dynamic-gallery.css";

export const DynamicGalleryComponent = ({name, images}) => {

	let  n = -1;

	return (
		<div className="interest-container">
			{ images.map((i) => {
				n++;
				return (
				<div className={`interest-figure ${(n%2 === 0 && n===images.length-1) ? "expand": ""}`}>
					<img src={process.env.PUBLIC_URL + i.src} alt={i.name}/>
				</div>
				)})}
		</div>
	)
};