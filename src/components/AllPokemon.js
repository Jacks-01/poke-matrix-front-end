/**
 * @file getPokemon.js
 * @description this component is responsible for making the call to the PokeAPI and grabbing the data to store in a variable
 */

import axios from 'axios';
import React, { Component } from 'react';
import Pokemon from './Pokemon';

//* Setting up our class. It holds our pokemon data in state (pokemons).
class AllPokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: [],
		};
	}

	// calls getPokemon() when component is loaded.
	componentDidMount = () => {
		this.getPokemon();
	};

	/**
	 * @description sets this.state.pokemon to an array of objects with the results returned (results are pokemon).
	 */
	getPokemon = async () => {
		await axios
			.get('http://localhost:3001/pokemon')
			.then((res) => {
				console.log(res.data);
				this.setState({ pokemons: res.data });
			})
			.catch((err) => {
				console.error(err);
			});

		console.log(this.state.pokemons);
	};
	render() {
		
		/**
		 * Maps over our pokemons array (in state) and displays them
		 */
		return (
			this.state.pokemons &&
			this.state.pokemons.map((pokemon, idx) => {
				return (
					<Pokemon
						key={idx}
						name={pokemon.name}
						image={pokemon.sprites.front_default}
						id={pokemon.id}
					/>
				);
			})
		);
	}
}

export default AllPokemon;
