/**
 * @file Pokemon.js
 * @description component contains the data we want to display for each pokemon
 */

import React, { Component } from 'react';
import MediaCard from './MediaCard';

class Pokemon extends Component {
	render() {
		return (
			<MediaCard
				handleFavorite={this.props.handleFavorite}
				pokemon={this.props.pokemon}
			/>
		);
	}
}

export default Pokemon;
