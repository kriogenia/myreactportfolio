import React from "react";
import {useTranslation} from "react-i18next";
import "./skill-component.css";

/**
 * @param object	Object to build the component
 * @returns {div}	Card of the skill
 */
export const SkillComponent = ({object}) => {

	const {t} = useTranslation();

	const {name, lvl, icon} = object;

	return (
		<div className="skill-card">
			<div className="skill-logo">
				<img src={process.env.PUBLIC_URL + icon} alt={name}/>
			</div>
			<div className="skill-text">
				<h3>{t(`skills:${name}.name`)}</h3>
				<p>{t(`skills:${name}.description`)}</p>
			</div>
			<div className="skill-right">
				Lvl. {lvl}/5
				<div className="skill-lvl">
					{[1,2,3,4,5].map((x) => {
						return (
							<div key={`sb-${x}`} className={`skill-bar ${x<=lvl ? "filled" : "non-filled"}`}>
								&nbsp;
							</div>);
					})}
				</div>
			</div>
		</div>
	);

};