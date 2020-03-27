import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import {Spacer} from "../../components";
import me from "./img";
import config from "./social-media";
import "./home.css";

export const HomeComponent = () => {
	return (
		<div className="App">
			<Row className="justify-content-md-center">
				<Spacer/>
			</Row>
			<Row className="justify-content-md-center">
				<Col md={12} lg={3}/>
				<Col md={12} lg={6}>
					<Image src={me} style={{height: "200px"}} alt="Ricardo Soto Estévez"/>
					<h1>Ricardo <span className="surname text-primary">Soto Estévez</span></h1>
					<hr/>
					<p>I'm a spanish 25 years old Software Engineer underdegree at University of Oviedo.</p>
					<p>I was born in Noia, Galicia. I discovered the world of programming at age 14 through Youtube
						tutorials
						and decided this is the career I wanted since that moment as I really enjoyed all that coding
						stuff.</p>
					<p>Since that first "Hello, world!" I wrote un Ruby I've been playing with everything I could,
						making new projects from time to time. From a little program to pair participants of a little
						event we organized to a full mobile app to classify things (still in the works tho, but the
						desktop version is up). Could be a customized Discord bot be useful for our little server?
						Yeah, it could, so I did it.</p>
					<p>I just enjoy a lot coding, when I'm bored I usually think about creating a new project, probably
						with
						whatever I'm learning at that time. For example, this website, I'm learning React and that's how
						I
						use the knowledge I'm acquiring, making this really sweets my quarantine.</p>
					<p>Welcome, I'm Ricardo Soto Estévez, software developer.</p>
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
					<h3>Social media</h3>
					{config.social.map((item) => (
						<a key={item.key} href={item.to}>
							<Image src={item.icon} style={{height: "50px", margin: "0px 10px"}} alt={item.alt}/>
						</a>
					))}
				</Col>
				<Col md={12} lg={3}/>
			</Row>
		</div>
	);
};