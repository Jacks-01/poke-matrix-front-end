/**
 * @file App.js
 * @author Jack Stubblefield
 * @description coming soon
 */

import React, { Component } from 'react';
import Main from '../pages/Main';
import TopNav from './TopNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../pages/About';

class App extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<TopNav />
					<Routes>
						<Route path="/" element={<Main />}>
							{' '}
						</Route>
						<Route path="/about" element={<About />}>
							About
						</Route>
					</Routes>
				</BrowserRouter>
			</>
		);
	}
}

export default App;
