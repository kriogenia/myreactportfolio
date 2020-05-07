import React from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import SkillComponent from "./SkillComponent";
import {cskills} from "../../contexts";

export const SkillsComponent = () => {

	const {t} = useTranslation();

	return(
		<div className="App">
			<Row className="justify-content-md-center" style={{marginBottom: "10px"}}>
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<h1 style={{margin: "10px 0 0 0"}}>{t("skills.languages")}</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={2} xl={2}/>
				<Col xs={12} sm={12} md={12} lg={8} xl={8}>
					<Row>
						{cskills.languages.map((language) =>
							<SkillComponent project={language}/>
						)}
					</Row>
				</Col>
				<Col xs={12} sm={12} md={12} lg={2} xl={2}/>
			</Row>
		</div>
	);
};