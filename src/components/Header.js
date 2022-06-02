/**
 * @file Header.js
 * @description A header with navigation
 */

import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


class Header extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
						<Nav className="me-auto justify-content-center">
							<Nav.Link href="#home">About</Nav.Link>
							<Nav.Link href="#features">Login</Nav.Link>
							<Nav.Link href="#pricing">Build a Team</Nav.Link>
						</Nav>
				</Navbar>
			</>
		);
	}
}

export default Header;
