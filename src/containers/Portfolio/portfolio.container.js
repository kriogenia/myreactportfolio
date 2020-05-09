import React from "react";
import {Col, Row} from "react-bootstrap";
import {Spacer, CardSlider} from "../../components";
import {useTranslation} from "react-i18next";
import {MainProjectComponent, OtherProjectComponent} from "./ProjectsComponents";
import {cportfolio} from "../../contexts";

/**
 * @returns {div}	Portfolio page
 */
export const PortfolioComponent = () => {

	const {t} = useTranslation();

	return (
		<div className="App">
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<h1 className={"page-title"}>{t("portfolio.main")}</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col key={"c1"} xs={12} sm={12} md={12} lg={2} xl={2}/>
				<Col key={"c2"} xs={12} sm={12} md={12} lg={8} xl={8}>
					<Row>
						{cportfolio.main.map((project) =>
							<MainProjectComponent key={project.name} project={project}/>
						)}
					</Row>
				</Col>
				<Col key={"c3"} xs={12} sm={12} md={12} lg={2} xl={2}/>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<Spacer/>
					<h2>{t("portfolio.other")}</h2>
				</Col>
			</Row>
			<CardSlider component={OtherProjectComponent} cards={cportfolio.other}/>
		</div>
	);
};