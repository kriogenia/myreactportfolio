import React from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {CardSlider} from "../../components";
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
			<CardSlider component={SkillComponent} cards={cskills.languages}/>
		</div>
	);
};