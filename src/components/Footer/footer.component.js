import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
	return (
		<MDBFooter color="primary" className="font-small pt-4 mt-4">
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					{new Date().getFullYear()} - Ricardo Soto Estévez -
						<a href="https://github.com/kriogenia/"> Kriogenia </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default Footer;