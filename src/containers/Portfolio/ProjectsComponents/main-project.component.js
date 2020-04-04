import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import "./projects.css";

export const MainProjectComponent = (props) => {

	const project = props.project;
	const name = props.project.name;

	return (
		<Col md={12} lg={6}>
			<div className="expositor">
				<div className="expositor-left">
					<Image src={process.env.PUBLIC_URL + project.icon} alt={""}
						   className="expositor-image"/>
					<div className="expositor-extra">
						<a href={project.href}>
						<h3>{name}</h3>
						<Row noGutters={true} className="expositor-logos">
							{project.logos.map((logo) =>
								<Col xs={2} sm={2} md={2} lg={2} xl={2}>
									<Image src={process.env.PUBLIC_URL + logo.icon} alt={logo.name}
										   className="expositor-logo" data-toggle="tooltip" title={logo.name}/>
								</Col>
							)}
						</Row>
						</a>
					</div>
				</div>
				<div className="expositor-right">
					<h3>{name}</h3>
					<p>{name}</p>
				</div>
			</div>
		</Col>
	);
};