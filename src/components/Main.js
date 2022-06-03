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
				_id: '629a888c84190fc0d6ecbedc',
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
		this.updateUser(this.state.user);
	}

	removeFromUserFavorites = async (pokemon) => {
		//removes a favorite pokemon from user favorite array
		let updatedPokemon = this.state.user.favorites.filter((element) => {
			return (element.name !== pokemon.name);
		});
		console.log(`this is updatedPokemon: ${updatedPokemon}`);
		this.setState({favorites: updatedPokemon});
		console.log(`our updated pokemon array after removing ${pokemon.name} from favorites: ${JSON.stringify(updatedPokemon)}`)
		let updatedUser = {
			_id: this.state.user._id,
			username: this.state.user.username,
			password: this.state.user.password,
			favorites: updatedPokemon
		};
		this.updateUser(updatedUser);
	};

	updateUser = async (updatedUser) => {

		console.log(`user before updateUser: ${updatedUser.favorites}`)
		await axios.patch(`http://localhost:3001/users/${updatedUser._id}`, updatedUser)
				.then((res) => {
					console.log(res);
				}).catch((err) => {
					console.error(err)
				});
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
