/**
 * @file getPokemon.js
 * @description this component is responsible for making the call to the PokeAPI and Displaying a list.
 */

import { Grid } from '@mui/material';
import axios from 'axios';
import React, { Component } from 'react';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

//* Setting up our class. It holds our pokemon data in state (pokemons).
class AllPokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: [],
			user: {
				favorites: []
			}
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

	getOnePokemon = async (pokemon) => {
		await axios
			.get(`http://localhost:3001/pokemon?name=${pokemon}`)
			.then((res) => {
				console.log(res.data);
				this.setState({ pokemons: res.data });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	handleSearch = (e) => {
		e.preventDefault();
		console.log(e.target.value);

		let searchedPokemon = e.target.value;
		this.getOnePokemon(searchedPokemon.toLowerCase());
	};

		addUserFavorite = async (pokemon) => {
			console.log(`pokemon name: ${pokemon.name}`)
			this.setState({favorite: true});
			this.props.addToUserFavorites(pokemon)
		};

		removeUserFavorite = async (pokemon) => {
			this.setState({favorite: false});
			console.log(`pokemon we are marking as favorite: ${pokemon.name}`)
			
		};
	render() {
		/**
		 * Maps over our pokemons array (in state) and displays them
		 */
		return (
			<>
				<SearchBar handleSearch={this.handleSearch} />
					<Grid container item columns={5} columnGap={10} rowGap={5}>
						<PokemonList pokemons={this.state.pokemons} addUserFavorite={this.addUserFavorite} removeUserFavorite={this.removeUserFavorite}/>
					</Grid>
			</>
		);
	}
}

export default AllPokemon;
