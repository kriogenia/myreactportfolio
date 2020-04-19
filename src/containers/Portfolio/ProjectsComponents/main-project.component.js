import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import "./projects.css";
import {useTranslation} from "react-i18next";

export const MainProjectComponent = (props) => {

	const {t} = useTranslation();

	const {href, icon, name, logos} = props.project;

	return (
		<Col md={12} lg={6} key={name}>
			<div className="expositor">
				<div className="expositor-left">
					<Image src={process.env.PUBLIC_URL + icon} alt={name}
						className="expositor-image"/>
					<div className="expositor-extra">
						<a href={href}>
							<h3>{t("portfolio:" + name + ".name")}</h3>
							<Row noGutters={true} className="expositor-logos">
								{logos.map((logo) =>
									<Col xs={2} sm={2} md={2} lg={2} xl={2}>
										<Image src={process.env.PUBLIC_URL + logo.icon} alt={logo.name}
											className="expositor-logo" data-toggle="tooltip" title={logo.name}/>
									</Col>
								)}
							</Row>
						</a>
					</div>
				</div>
				<div className="expositor-right">
					<h3>{t("portfolio:" + name + ".name")}</h3>
					<p>{t("portfolio:" + name + ".description")}</p>
				</div>
			</div>
		</Col>
	);
};