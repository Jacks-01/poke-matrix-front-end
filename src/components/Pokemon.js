/**
 * @file Pokemon.js
 * @description component contains the data we want to display for each pokemon
 */

import React, { Component } from 'react';
import MediaCard from './MediaCard';

class Pokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favorite: false,
		};
	}
	addFavorite = (fav, pokemon) => {
		this.setState(
			{ favorite: true }
		);
		this.props.addUserFavorite(pokemon);
	};

	removeFavorite = (fav, pokemon) => {
		this.setState(
			{ favorite: false }
		);
		this.props.removeUserFavorite(pokemon);
	};
	render() {
		return (
				<MediaCard
					addFavorite={this.addFavorite}
					removeFavorite={this.removeFavorite}
					pokemon={this.props.pokemon}
				/>
		);
	}
}

export default Pokemon;
