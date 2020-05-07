import React from "react";
import {Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const CardSliderComponent = ({component:Component, cards}) => {

	const [index, setIndex] = React.useState(0);
	let loadedCards = [index, index+1, index+2];

	const reload = () => { loadedCards = [index, index+1, index+2]; };

	const moveLeft = () => {
		setIndex(index-1);
		reload();

	};

	const moveRight = () => {
		setIndex(index+1);
		reload();
	};

	return (
		<Row className="justify-content-md-center">
			<Col xs={12} sm={12} md={12} lg={1} xl={1}/>
			<Col xs={12} sm={12} md={12} lg={1} xl={1}>
				<button className={"float-right h-100 btn btn-primary rounded"}
						onClick={moveLeft} disabled={index===0}>
					<FontAwesomeIcon icon={faChevronLeft} className={"h-100"}/>
				</button>
			</Col>
			<Col xs={12} sm={12} md={12} lg={8} xl={8}>
				<Row>
				{loadedCards.map((i) => {
					console.log(loadedCards);
					return (
						<Col md={12} lg={4}>
							<Component project={cards[i]}/>
						</Col>	);
				})}
				</Row>
			</Col>
			<Col xs={12} sm={12} md={12} lg={1} xl={1}>
				<button className={"float-left h-100 btn btn-primary rounded"}
						onClick={moveRight} disabled={index+2===cards.length-1}>
					<FontAwesomeIcon icon={faChevronRight} className={"h-100"}/>
				</button>
			</Col>
			<Col xs={12} sm={12} md={12} lg={1} xl={1}/>
		</Row>
	);
};