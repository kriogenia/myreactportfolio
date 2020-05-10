import React from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {DynamicGallery} from "../../components";
import {cinterests} from "../../contexts";

export const InterestsComponent = () => {

	const {t} = useTranslation();

	return (
		<div className={"App"}>
			<Row className="justify-content-md-center">
				<h1 className={"page-title"}>{t("interests.title")}</h1>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={12} lg={2}/>
				<Col md={12} lg={8}>
					<Row>
						{cinterests.interests.map((i) =>
							<Col md={6}>
								<DynamicGallery name={i.name} images={i.images}/>
							</Col>
						)}
					</Row>
				</Col>
				<Col md={12} lg={2}/>
			</Row>
		</div>
	);
};