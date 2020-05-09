import React from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {ccv} from "../../contexts";
import CVTable from "./CVTable";

export const CVComponent = () => {

	const {t} = useTranslation();

	const {sections, studies, jobs} = ccv.cv;

	return(
		<div className="App">
			<Row className="justify-content-md-center">
				<h1 className={"page-title"}>{t("cv.title")}</h1>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<h2>{t("cv.studies")}</h2>
				</Col>
				<Col md={12} lg={3}/>
				<Col md={12} lg={6}>
					<CVTable sections={sections} history={studies}/>
				</Col>
				<Col md={12} lg={3}/>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<h2>{t("cv.jobs")}</h2>
				</Col>
				<Col md={12} lg={3}/>
				<Col md={12} lg={6}>
					<CVTable sections={sections} history={jobs}/>
				</Col>
				<Col md={12} lg={3}/>
			</Row>
		</div>
	);

};