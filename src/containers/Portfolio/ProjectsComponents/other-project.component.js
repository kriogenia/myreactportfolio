import React from "react";
import "./projects.css";
import {useTranslation} from "react-i18next";

export const OtherProjectComponent = (props) => {

	const {t} = useTranslation();

	const {name, href} = props.object;

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