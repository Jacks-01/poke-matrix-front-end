/**
 * @file getPokemon.js
 * @description this component is responsible for making the call to the PokeAPI and grabbing the data to store in a variable
 */

import axios from "axios";
import React, { Component } from 'react';



class AllPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount = () => {
        this.getPokemon();
    }

    /**
     * @description sets this.state.pokemon to an array of objects with the results returned (results are pokemon).
     */
    getPokemon = async () => {
        await axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
            // console.log(res.data);
            this.setState({pokemon : res.data.results})
        }).catch((err) => {
            console.error(err);
        })
        
        console.log(this.state.pokemon);
    };
    render() { 
        return ( 
            <>
            </>    
         );
    }
}
 
export default AllPokemon;

