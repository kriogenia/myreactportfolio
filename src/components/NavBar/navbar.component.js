import React, {Suspense} from "react";
import {Image, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavChildren from "./children";
import "./navbar.css";
import i18n from "../../i18n";
import {logo, flages, flaggl, flaguk} from "./img/";

/**
 * Navigation bar of the page
 *  @returns {*}
 */
const NavBar = () => {

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Navbar.Brand href="/"><Image src={logo} alt="Home" className="nav-img brand-logo"/></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Suspense fallback={<Nav>Loading...</Nav>}>
					<NavChildren/>
				</Suspense>
				<Nav  className="mr-auto"></Nav> {/* Empty space */}
				<Nav> {/* Language buttons */}
					<Image onClick={() => changeLanguage("en")}
						src={flaguk} alt="Home" className="nav-img flag-img"/>
					<Image onClick={() => changeLanguage("es")}
						src={flages} alt="Home" className="nav-img flag-img"/>
					<Image onClick={() => changeLanguage("gl")}
						src={flaggl} alt="Home" className="nav-img flag-img"/>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;