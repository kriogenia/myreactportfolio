import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import "./projects.css";
import {name} from "../../../configs/common";

export const MainProjectComponent = () => {

	return (
		<Col md={12} lg={6}>
			<div className="expositor">
				<div className="expositor-left">
					<Image src={name + "/img/logo.svg"} alt={""}
						className="expositor-image"/>
					<div className="expositor-extra">
						<h3>Título</h3>
						<div className="expositor-link">
							Link
						</div>
						<Row noGutters={true} className="expositor-logos">
							<Col xs={2} sm={2} md={2} lg={2} xl={2}>
								<Image src={name + "/img/lang/flag-uk.svg"} alt={""} width={"100%"}/>
							</Col>
							<Col xs={2} sm={2} md={2} lg={2} xl={2}>
								<Image src={name + "/img/lang/flag-es.svg"} alt={""} width={"100%"}/>
							</Col>
							<Col xs={2} sm={2} md={2} lg={2} xl={2}>
								<Image src={name + "/img/lang/flag-gl.svg"} alt={""} width={"100%"}/>
							</Col>
						</Row>
					</div>
				</div>
				<div className="expositor-right">
					<h3>Título</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</div>
		</Col>
	);
};