/**
 * @file Header.js
 * @description A header with navigation
 */

import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Header extends Component {
	render() {
		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Container className='justify-content-center'>
						<Navbar.Brand href="#home">Poke-Matrix</Navbar.Brand>
					
					<Nav className='me auto'>
						<Nav.Link href="#home">About</Nav.Link>
						<Nav.Link href="#login">Login</Nav.Link>
					</Nav>
					</Container>
				</Navbar>
			</>
		);
	}
}

export default Header;
