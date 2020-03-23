import React, {Suspense} from "react";
import {Image, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./navbar.css";
import i18n from "../../i18n";
import logo from "./img/logo.svg";
import flages from "./img/flag-es.svg";
import flaggl from "./img/flag-gl.svg";
import flaguk from "./img/flag-uk.svg";

/**
 * Navigation bar of the page
 *  @returns {*}
 */
const NavBar = () => {
	const { t } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<Navbar>
			<Navbar.Brand href="/"><Image src={logo} alt="Home" className="nav-img brand-logo"/></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Suspense fallback={<Nav>Loading...</Nav>}>
					<Nav> {/* Links */}
						<NavLink exact to="/bio">{t("navbar.bio")}</NavLink>
						<NavLink exact to="/portfolio">{t("navbar.portfolio")}</NavLink>
						<NavLink exact to="/skills">{t("navbar.skills")}</NavLink>
						<NavLink exact to="/cv">{t("navbar.cv")}</NavLink>
						<NavLink exact to="/interests">{t("navbar.interests")}</NavLink>
					</Nav>
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