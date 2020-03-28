import React, {Suspense} from "react";
import {Image, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavChildren from "./children";
import {useTranslation} from "react-i18next";
import i18n from "../../i18n";
import {clanguages, name} from "../../configs";
import "./navbar.css";

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
		<Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Navbar.Brand href="/">
				<Image src={name + "/img/logo.svg"} alt="Home" className="nav-img brand-logo"/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Suspense fallback={<Nav>Loading...</Nav>}>
					<NavChildren/>
				</Suspense>
				<Nav  className="mr-auto"/> {/* Empty space */}
				<Nav> {/* Language buttons */}
					{clanguages.languages.map((item) => (
						<Image key={item.key} onClick={() => changeLanguage(item.code)}
							src={item.icon} alt={t(item.alt)} className="nav-img flag-img"/>
					))}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;