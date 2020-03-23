import React, {Suspense} from "react";
import {Image, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./navbar.css";
import logo from "./img/logo.svg";
import i18n from "../../i18n";

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
			<Navbar.Brand href="/"><Image src={logo} alt="Home" className="brand-logo"/></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Suspense fallback={<Nav>Loading...</Nav>}>
					<Nav>
						<NavLink exact to="/bio">{t("navbar.bio")}</NavLink>
						<NavLink exact to="/portfolio">{t("navbar.portfolio")}</NavLink>
						<NavLink exact to="/skills">{t("navbar.skills")}</NavLink>
						<NavLink exact to="/cv">{t("navbar.cv")}</NavLink>
						<NavLink exact to="/interests">{t("navbar.interests")}</NavLink>
					</Nav>
				</Suspense>
				<button onClick={() => changeLanguage("es")}>es</button>
				<button onClick={() => changeLanguage("en")}>en</button>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;