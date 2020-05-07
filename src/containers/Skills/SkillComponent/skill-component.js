import React from "react";
import {Col} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import "./skill-component.css";

export const SkillComponent = (props) => {

	const {t} = useTranslation();

	const {name, lvl, icon} = props.project;

	return (
		<Col md={12} lg={4} key={name}>
			<div className="skill-card">
				<div className="skill-logo">
					<img src={process.env.PUBLIC_URL + icon} alt={name}/>
				</div>
				<div className="skill-text">
					<h3>{t("skills:" + name + ".name")}</h3>
					<p>{t("skills:" + name + ".description")}</p>
				</div>
				<div className="skill-right">
					LVL {lvl}/5
					<div className="skill-lvl">
						{[1,2,3,4,5].map((x) => {
							return <div className={"skill-bar " + (x<=lvl ? "filled" : "non-filled")}>&nbsp;</div>
						})}
					</div>
				</div>
			</div>
		</Col>
	)

};