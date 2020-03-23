import React from "react";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {useTranslation} from "react-i18next";
import config from "./../../../services/navbar-options";

const NavChildren = () => {
	const { t } = useTranslation();

	return (
		<Nav> {/* Links */}
			{config.navbar.map((item) => (
			<NavLink key={item.key} to={item.to} activeClassName="active">
					<span className="icon">
					<img
						src={item.icon}
						alt={t(item.label)}
						className="nav-icon"
						width="24px"
						height="20px"
						style={{width: "24px"}}
					/>
						</span>
				<span className="label">{t(item.label)}</span>
			</NavLink>
			))}
		</Nav>
	);
};

export default NavChildren;