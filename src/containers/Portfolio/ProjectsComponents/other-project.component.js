import React from "react";
import {Col} from "react-bootstrap";
import "./projects.css";
import {useTranslation} from "react-i18next";

export const OtherProjectComponent = (props) => {

	const {t} = useTranslation();

	const {name, href} = props;

	return (
		<Col md={12} lg={4} className="project-container other-project">
			<div className="expositor">
				<div className="expositor-left">
					<div className="expositor-extra">
						<a href={href}>
							<h3>{t(name + ".name")}</h3>
						</a>
					</div>
				</div>
				<div className="expositor-right">
					<h3>{t(name + ".name")}</h3>
				</div>
			</div>
		</Col>
	);
};