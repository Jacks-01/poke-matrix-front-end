/**
 * @file Main.js
 * @description this component is responsible for holding all content in the home page (pokedex).
 */
import React, { Component } from 'react';
import AllPokemon from './AllPokemon';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {

			}
		}
	}

	addToUserFavorites = (pokemon) => {
		// add to user pokemon favorite array
	}

	removeFromUserFavorites = (pokemon) => {
		//removes a favorite pokemon from user favorite array
	}
	render() {
		return (
			<div>
				<AllPokemon addToUserFavorites={this.addToUserFavorites} removeFromUserFavorites={this.removeFromUserFavorites} />
			</div>
		);
	}
}

export default Main;
