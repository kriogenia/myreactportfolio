import React from "react";
import {Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {CardSlider} from "../../components";
import SkillComponent from "./SkillComponent";
import {cskills} from "../../contexts";

/**
 * @returns {div}	Skills page
 */
export const SkillsComponent = () => {

	const {t} = useTranslation();

	return(
		<div className="App">
			{cskills.list.map((section) =>
				<div key={section.name}>
					<Row className="justify-content-md-center" style={{marginBottom: "10px"}}>
						<h1 style={{margin: "20px 0"}}>{t(`skills:titles.${section.name}`)}</h1>
					</Row>
					<CardSlider component={SkillComponent} cards={section.proficiencies}/>
				</div>
			)}
		</div>
	);
};