import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import "./footer.css";

/**
 * @returns {div}	Footer component of the web
 */
const Footer = () => {
	return (
		<MDBFooter color="primary bg-dark footer" className="font-small pt-4 mt-4">
			<div className="footer-copyright text-center footer">
				<MDBContainer fluid>
					{`${new Date().getFullYear()} - Ricardo Soto Estévez - `}
						<a href="https://github.com/kriogenia/">Kriogenia </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default Footer;