import React from "react";
import {Col, Row} from "react-bootstrap";
import {Spacer} from "../../components";
import {useTranslation} from "react-i18next";
import {MainProjectComponent, OtherProjectComponent} from "./ProjectsComponents";
import {cportfolio} from "../../contexts";

export const PortfolioComponent = () => {
	const {t} = useTranslation();

	return (
		<div className="App">
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<h1 style={{margin: "10px 0 0 0"}}>{t("portfolio.main")}</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={2} xl={2}/>
				<Col xs={12} sm={12} md={12} lg={8} xl={8}>
					<Row>
						{cportfolio.main.map((project) =>
							<MainProjectComponent project={project}/>
						)}
					</Row>
				</Col>
				<Col xs={12} sm={12} md={12} lg={2} xl={2}/>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<Spacer/>
					<h2>{t("portfolio.other")}</h2>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={12} lg={2}/>
				<Col md={12} lg={8}>
					<Row>
						{cportfolio.other.map((project) =>
							<OtherProjectComponent name={project.name} href={project.href}/>
						)}
					</Row>
				</Col>
				<Col md={12} lg={2}/>
			</Row>
		</div>
	);
};