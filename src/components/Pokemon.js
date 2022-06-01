/**
 * @file Pokemon.js
 * @description component contains the data we want to display for each pokemon
 */

import React, { Component } from 'react';
import MediaCard from './MediaCard';

class Pokemon extends Component {
	render() {
		return(
            <div>
            <MediaCard image={this.props.image} name={this.props.name} id={this.props.id}/>
            </div>
        ) 
        
        
      
	}
}

export default Pokemon;
