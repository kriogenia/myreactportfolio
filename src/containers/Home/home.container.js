import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import {Spacer} from "../../components";
import {useTranslation} from "react-i18next";
import {csocial} from "../../contexts";
import me from "./img";
import "./home.css";

export const HomeComponent = () => {
	const {t} = useTranslation();

	return (
		<div className="App">
			<Row className="justify-content-md-center">
				<Spacer/>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={12} lg={3}/>
				<Col md={12} lg={6}>
					<Image src={me} style={{height: "200px"}} alt="Ricardo Soto Estévez"/>
					<h1>{t("bio:name")} <span className="surname text-primary">{t("bio:surname")}</span></h1>
					<hr/>
					<p>{t("bio:p1")}</p>
					<p>{t("bio:p2")}</p>
					<p>{t("bio:p3")}</p>
				</Col>
				<Col md={12} lg={3}/>
			</Row>
			<Row className="justify-content-md-center">
				<Spacer/>
			</Row>
			<Row className="justify-content-md-center">
			</Row>
			<Row className="justify-content-md-center">
				<Col md={12} lg={3}/>
				<Col md={12} lg={6}>
					<h3>{t("bio.social")}</h3>
					{csocial.social.map((item) => (
						<a key={item.key} href={item.to}>
							<Image src={process.env.PUBLIC_URL + item.icon} style={{height: "50px", margin: "0px 10px"}}
								   data-toggle="tooltip" title={item.alt} alt={item.alt}/>
						</a>
					))}
				</Col>
				<Col md={12} lg={3}/>
			</Row>
		</div>
	);
};