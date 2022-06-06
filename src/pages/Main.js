/**
 * @file Main.js
 * @description Contains user data to send to DB and update favorites.
 */
import React, { Component } from 'react';
import AllPokemon from '../components/AllPokemon';
import axios from 'axios';
const URL = process.env.REACT_APP_URL;

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				_id: '629a888c84190fc0d6ecbedc',
				username: 'jack',
				password: 'jack',
				favorites: [],
			},
		};
	}

	addToUserFavorites = async (pokemon) => {
		// add to user pokemon favorite array
		this.state.user.favorites.push(pokemon);
		this.updateUser(this.state.user);
	};

	removeFromUserFavorites = async (pokemon) => {
		//removes a favorite pokemon from user favorite array
		let updatedPokemon = this.state.user.favorites.filter((element) => {
			return element.name !== pokemon.name;
		});
		this.setState({ favorites: updatedPokemon });
		let updatedUser = {
			_id: this.state.user._id,
			username: this.state.user.username,
			password: this.state.user.password,
			favorites: updatedPokemon,
		};
		this.updateUser(updatedUser);
	};

	updateUser = async (updatedUser) => {
		await axios
			.patch(`${URL}/users/${updatedUser._id}`, updatedUser)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	};
	render() {
		return (
			<div>
				<AllPokemon
					addToUserFavorites={this.addToUserFavorites}
					removeFromUserFavorites={this.removeFromUserFavorites}
				/>
			</div>
		);
	}
}

export default Main;
