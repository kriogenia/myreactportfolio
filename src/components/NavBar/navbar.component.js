import React, {Suspense} from "react";
import {Image, Navbar, Nav} from "react-bootstrap";
import NavChildren from "./children";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";
import {clanguages} from "../../contexts";
import "./navbar.css";

/**
 * @returns {navbar}	Navigation bar of the web page
 */
const NavBar = () => {

	// Internationalization
	const { t } = useTranslation();

	// Changes the language
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<Navbar className="navbar navbar-dark" bg="dark" expand="lg">
			<Navbar.Brand href={process.env.PUBLIC_URL}>
				<Image src={process.env.PUBLIC_URL + "/img/logo.svg"} alt="Home" className="nav-img brand-logo"/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Suspense fallback={<Nav>Loading...</Nav>}>
					<NavChildren/>										{/* Navbar options */}
				</Suspense>
				<Nav className="mr-auto"/> 								{/* Empty space */}
				<Nav className="collapse-languages"> 					{/* Language buttons */}
					{clanguages.languages.map((item) =>
						<Image key={item.key} className="nav-img flag-img" onClick={() => changeLanguage(item.code)}
								src={process.env.PUBLIC_URL + item.icon} alt={t(item.alt)}
								data-toggle="tooltip" title={t(item.alt)}/>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;