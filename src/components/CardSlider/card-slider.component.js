import React from "react";
import {Col, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

/**
 * @param Component		Card to display in the slider
 * @param cards			Array of info of the cards to display
 * @returns {div}		Slider with three cards you can cycle
 */
export const CardSliderComponent = ({component:Component, cards}) => {

	const [index, setIndex] = React.useState(0);		// State holding the index of the first displayed item
	let loadedCards = [];										// Array to hold the indexes to show

	// Fills the loadedCards with the next three (or less) indexes to show
	const reload = () => {
		loadedCards = [];
		for (let i = index; i <= Math.min(index + 2, cards.length - 1); i++) { loadedCards.push(i); }
	};

	// Moves the index three positions to the left and calls for a reload
	const moveLeft = () => {
		setIndex(index-3);
		reload();
	};

	// Moves the index three positions to the left and calls for a reload
	const moveRight = () => {
		setIndex(index+3);
		reload();
	};

	reload();

	return (
		<Row className="justify-content-md-center">
			<Col xs={12} sm={12} md={12} lg={1} xl={1} key={"cs-col1"}/>
			<Col xs={12} sm={12} md={12} lg={1} xl={1} key={"cs-col2"}>
				{/* Cycle to the left arrow, only visible when that action is possible */}
				<button className={"float-right h-100 btn btn-primary rounded"}
						onClick={moveLeft} hidden={index === 0}>
					<FontAwesomeIcon icon={faChevronLeft} className={"h-100"}/>
				</button>
			</Col>
			<Col xs={12} sm={12} md={12} lg={8} xl={8} key={"cs-col3"}>
				<Row>
					{/* Set of cards to print */}
					{loadedCards.map((i) => {
						return (
							<Col md={12} lg={4} key={`cs-card${i}`}>
								<Component object={cards[i]}/>
							</Col>	);
					})}
				</Row>
			</Col>
			<Col xs={12} sm={12} md={12} lg={1} xl={1} key={"cs-col4"}>
				{/* Cycle to the right arrow, only visible when that action is possible */}
				<button className={"float-left h-100 btn btn-primary rounded"}
						onClick={moveRight} hidden={index+2 >= cards.length-1}>
					<FontAwesomeIcon icon={faChevronRight} className={"h-100"}/>
				</button>
			</Col>
			<Col xs={12} sm={12} md={12} lg={1} xl={1} key={"cs-col5"}/>
		</Row>
	);
};