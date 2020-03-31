import React from "react";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {useTranslation} from "react-i18next";
import {cnavbar} from "../../../contexts";

const NavChildren = () => {
	const { t } = useTranslation();

	return (
		<Nav> {/* Links */}
			{cnavbar.navbar.map((item) => (
			<NavLink key={item.key} to={item.to} activeClassName="active" className="nav-link">
					<span className="icon">
					<img
						src={process.env.PUBLIC_URL + item.icon}
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