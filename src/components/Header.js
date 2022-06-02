/**
 * @file Header.js
 * @description A header with navigation
 */

import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';


class Header extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Container>
						<Nav className="me-auto">
							<Nav.Link href="#home">About</Nav.Link>
							<Nav.Link href="#features">Login</Nav.Link>
							<Nav.Link href="#pricing">Build a Team</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</>
		);
	}
}

export default Header;
