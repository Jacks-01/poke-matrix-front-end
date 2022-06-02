/**
 * @file Main.js
 * @description this component is responsible for holding all content in the home page (pokedex).
 */
import React, { Component } from 'react';
import AllPokemon from './AllPokemon';

class Main extends Component {

	render() {
		return (
			<div>
				<AllPokemon />
			</div>
		);
	}
}

export default Main;
