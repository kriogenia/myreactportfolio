import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import "./projects.css";

export const MainProjectComponent = () => {

	return (
		<Col md={12} lg={6}>
			<div className="expositor">
				<div className="expositor-left">
					<Image src={process.env.PUBLIC_URL + "/img/logo.svg"} alt={""}
						className="expositor-image"/>
					<div className="expositor-extra">
						<h3>Título</h3>
						<div className="expositor-link">
							Link
						</div>
						<Row noGutters={true} className="expositor-logos">
							<Col xs={2} sm={2} md={2} lg={2} xl={2}>
								<Image src={process.env.PUBLIC_URL + "/img/lang/flag-uk.svg"} alt={""}
									   className={"expositor-logo"} data-toggle="tooltip" title="Hooray!"/>
							</Col>
							<Col xs={2} sm={2} md={2} lg={2} xl={2}>
								<Image src={process.env.PUBLIC_URL + "/img/lang/flag-es.svg"} alt={""}
									   className={"expositor-logo"} data-toggle="tooltip" title="Hooray!"/>
							</Col>
							<Col xs={2} sm={2} md={2} lg={2} xl={2}>
								<Image src={process.env.PUBLIC_URL + "/img/lang/flag-gl.svg"} alt={""}
									   className={"expositor-logo"} data-toggle="tooltip" title="Hooray!"/>
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