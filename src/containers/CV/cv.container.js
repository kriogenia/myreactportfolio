import React from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {ccv} from "../../contexts";

export const CVComponent = () => {

	const {t} = useTranslation();

	const {sections, history} = ccv.cv;

	return(
		<div className="App">
			<Row className="justify-content-md-center">
				<Col xs={12} sm={12} md={12} lg={12} xl={12}>
					<h1 className={"page-title"}>{t("cv.title")}</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={12} lg={3}/>
				<Col md={12} lg={6}>
					<table className="table">
						<thead className="table-primary">
						<tr>
							{ sections.map((title) =>
								<th scope="col" key={title} style={{textTransform: "uppercase"}}>
									{t(`cv:titles.${title}`)}
								</th>
							)}
						</tr>
						</thead>
						<tbody>
						{ history.map((x) =>
							<tr key={`tr-${x.reduce((acc, y) => acc + y)}`}>
								{x.map((y) => <td key={y}>{t(`cv:other.${y}`)}</td>)}
							</tr>
						)}
						</tbody>
					</table>
				</Col>
				<Col md={12} lg={3}/>
			</Row>
		</div>
	)

};