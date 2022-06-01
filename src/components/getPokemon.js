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

    getPokemon = async () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.error(err);
        })
        
    };
    render() { 
        return ( 

    
         );
    }
}
 
export default AllPokemon;

