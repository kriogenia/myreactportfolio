import React from "react";
import "./dynamic-gallery.css";
import {useTranslation} from "react-i18next";

/**
 * @param name		Codename to load the translations
 * @param images	Images to fill the gallery
 * @returns {div}	Gallery with the info and 1-4 images in the background
 */
export const DynamicGalleryComponent = ({name, images}) => {

	const [hovering, setHovering] = React.useState(false);	// Hover state

	const {t} = useTranslation();

	let  n = -1;														// Image counter

	/**
	 * @param n				Image counter
	 * @returns {string}	Classes the image will receive based on the counter and the total of images
	 */
	const generateClasses = (n) => {
		if (n === 0 && images.length === 1)	{return "tl tr bl br expand";}
		if (n === 0 && images.length === 2)	{return "tl bl";}
		if (n === 0)						{return "tl";}
		if (n === 1 && images.length === 2)	{return "tr br";}
		if (n === 1)						{return "tr";}
		if (n === 2 && images.length === 3)	{return "bl br expand";}
		if (n === 2)						{return "bl";}
		if (n === 3)						{return "br";}
	};

	return (
		<div className={"interest-container"} onMouseEnter={() => setHovering(true)}
				onMouseLeave={() => setHovering(false)}>
			{/* Container with the title and description */}
			<div className="interest-front">
				<div className={"interest-info"}>
					<h3>{t(`interests:${name}.name`)}</h3>
					{hovering? <p>{t(`interests:${name}.description`)}</p> : null}
				</div>
			</div>
			{/* Container with the background images */}
			<div className="interest-back">
				{ images.map((i) => {
					let classes = generateClasses(++n);
					return (
						<div className={`interest-figure ${classes} ${hovering? "showName" : ""}`}
							style={{backgroundImage: `url(${process.env.PUBLIC_URL + i.src})`}}>
							{t(`interests:${i.name}`)}
						</div>
					);})}
			</div>
		</div>
	);
};