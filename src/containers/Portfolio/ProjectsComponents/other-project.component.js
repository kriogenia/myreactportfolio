import React from "react";
import "./projects.css";
import {useTranslation} from "react-i18next";

/**
 * @param object	Object to use in the construction of the card
 * @returns {div}	Card displaying the component
 */
export const OtherProjectComponent = ({object}) => {

	const {t} = useTranslation();

	// Fields of the object to use
	const {name, href} = object;

	return (
		<div className="other-project expositor">
			<div className="expositor-left"/>
			<div className="expositor-right">
				<a href={href}>
					<h3>{t(`portfolio:${name}.name`)}</h3>
				</a>
				<p>{t(`portfolio:${name}.description`)}</p>
			</div>
		</div>
	);
};