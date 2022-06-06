/**
 * @file getPokemon.js
 * @description this component is responsible for making the call to the PokeAPI and Displaying a list.
 */

import { Grid, Container } from '@mui/material';
import axios from 'axios';
import React, { Component } from 'react';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';
const URL = process.env.REACT_APP_URL;

// Setting up our class. It holds our pokemon data in state (pokemons).
class AllPokemon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: [],
		};
	}

	// calls getPokemon() when component is loaded.
	componentDidMount = () => {
		document.body.style.backgroundColor = '#c5cae9';
		console.log(URL);
		this.getPokemon();
	};

	/**
	 * @description sets this.state.pokemon to an array of objects with the results returned (results are pokemon).
	 */
	getPokemon = async () => {
		await axios
			.get(`${URL}/pokemon`)
			.then((res) => {
				this.setState({ pokemons: res.data });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	// called whenever the FULL name of the pokemon is typed into the search bar
	getOnePokemon = async (pokemon) => {
		await axios
			.get(`${URL}/pokemon?name=${pokemon}`)
			.then((res) => {
				this.setState({ pokemons: res.data });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	handleSearch = (e) => {
		e.preventDefault();

		let searchedPokemon = e.target.value;
		this.getOnePokemon(searchedPokemon.toLowerCase());
	};

	// adds to the user profile
	addUserFavorite = async (pokemon) => {
		this.setState({ favorite: true });
		this.props.addToUserFavorites(pokemon);
	};

	// removes from the user profile
	removeUserFavorite = async (pokemon) => {
		this.setState({ favorite: false });
		this.props.removeFromUserFavorites(pokemon);
	};

	// grabs the user, then updates state with only the favorite pokemon
	displayFavorites = async () => {
		await axios
			.get(`${URL}/users`)
			.then((res) => {
				this.setState({ pokemons: res.data[0].favorites });
			})
			.catch((err) => {
				console.error(err);
			});
	};
	render() {
		/**
		 * Maps over our pokemons array (in state) and displays them
		 */
		return (
			<>
				<SearchBar
					handleSearch={this.handleSearch}
					displayFavorites={this.displayFavorites}
				/>
				<Container maxWidth="xl">
					<Grid container columns={5} columnGap={10} rowGap={5}>
						<PokemonList
							pokemons={this.state.pokemons}
							addUserFavorite={this.addUserFavorite}
							removeUserFavorite={this.removeUserFavorite}
						/>
					</Grid>
				</Container>
			</>
		);
	}
}

export default AllPokemon;
