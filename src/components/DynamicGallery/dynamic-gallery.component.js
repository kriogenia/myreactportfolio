import React from "react";
import "./dynamic-gallery.css";
import {useTranslation} from "react-i18next";

export const DynamicGalleryComponent = ({name, images}) => {

	const [hovering, setHovering] = React.useState(false);	// Hover state

	const {t} = useTranslation();

	let  n = -1;

	const generateClasses = (n) => {
		if (n === 0 && images.length === 1)	return "tl tr bl br expand";
		if (n === 0 && images.length === 2)	return "tl bl";
		if (n === 0)						return "tl";
		if (n === 1 && images.length === 2)	return "tr br";
		if (n === 1)						return "tr";
		if (n === 2 && images.length === 3)	return "bl br expand";
		if (n === 2)						return "bl";
		if (n === 3)						return "br";
	};

	return (
		<div className={"interest-container"} onMouseEnter={() => setHovering(true)}
			 onMouseLeave={() => setHovering(false)}>
			<div className="interest-front">
				<div className={"interest-info"}>
					<h3>{t(`interests:${name}.name`)}</h3>
					{hovering? <p>{t(`interests:${name}.description`)}</p> : null}
				</div>
			</div>
			<div className="interest-back">
				{ images.map((i) => {
					let classes = generateClasses(++n);
					return (
						<div className={`interest-figure ${classes} ${hovering? "showName" : ""}`}
							style={{backgroundImage: `url(${process.env.PUBLIC_URL + i.src})`}}>
							{i.name}
						</div>
					);})}
			</div>
		</div>
	);
};