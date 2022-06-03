/**
 * @file Main.js
 * @description this component is responsible for holding all content in the home page (pokedex).
 */
import React, { Component } from 'react';
import AllPokemon from './AllPokemon';
import axios from 'axios';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				username: 'jack',
				password: 'jack',
				favorites: []
			}
		}
	}


	addToUserFavorites = async (pokemon) => {
		// add to user pokemon favorite array
		console.log(`this is our pokemon marked as favorite in main.js ${pokemon.name}`)
		this.state.user.favorites.push(pokemon);
		console.log(`this is our favorites array after adding a new one: ${this.state.user.favorites}`);
		
		await axios.post(`http://localhost:3001/users`, this.state.user)
				.then((res) => {
					console.log(res);
				}).catch((err) => {
					console.error(err)
				});
	}

	removeFromUserFavorites = async (pokemon) => {
		//removes a favorite pokemon from user favorite array
		let updatedPokemon = this.state.user.favorites.filter((element) => {
			return (element.name !== pokemon.name);
		});
		this.setState({favorites: updatedPokemon});
		console.log(`our updated pokemon array after removing ${pokemon.name} from favorites: ${updatedPokemon}`)
		
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
