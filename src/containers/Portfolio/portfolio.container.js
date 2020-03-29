import React from "react";
import {Col, Row} from "react-bootstrap";
import {Spacer} from "../../components";
import {useTranslation} from "react-i18next";
import {MainProjectComponent, OtherProjectComponent} from "./ProjectsComponents";

export const PortfolioComponent = () => {
	const {t} = useTranslation();

	return (
		<div className="App">
			<Row className="justify-content-md-center">
				<Spacer/>
				<h1>{t("portfolio.main")}</h1>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={12} lg={2}/>
				<Col md={12} lg={8}>
					<Row>
						<MainProjectComponent/>
						<MainProjectComponent/>
						<MainProjectComponent/>
						<MainProjectComponent/>
					</Row>
				</Col>
				<Col md={12} lg={2}/>
			</Row>
			<Row className="justify-content-md-center">
				<Spacer/>
				<h2>{t("portfolio.other")}</h2>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={12} lg={2}/>
				<Col md={12} lg={8}>
					<Row>
						<OtherProjectComponent/>
						<OtherProjectComponent/>
						<OtherProjectComponent/>
						<OtherProjectComponent/>
						<OtherProjectComponent/>
					</Row>
				</Col>
				<Col md={12} lg={2}/>
			</Row>
		</div>
	);
};