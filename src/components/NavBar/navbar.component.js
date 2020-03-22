import React from "react";
import {Image, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import "./navbar.css";
import logo from "./img/logo.svg";

/**
 * Navigation bar of the page
 *  @returns {*}
 */
const NavBar = () => {

	return (
		<Navbar>
			<Navbar.Brand href="/"><Image src={logo} alt="Home" className="brand-logo"/></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<NavLink exact to="/bio">Bio</NavLink>
					<NavLink exact to="/portfolio">Portfolio</NavLink>
					<NavLink exact to="/skills">Skills</NavLink>
					<NavLink exact to="/cv">Curriculum Vitae</NavLink>
					<NavLink exact to="/interests">Interests</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;