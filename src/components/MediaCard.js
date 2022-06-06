/**
 * @file MediaCard.js
 * @description MUI card that passes props for each pokemon property.
 */

import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
	IconButton,
} from '@mui/material';

// TODO: Customize card

export default function MediaCard(props) {
	const [fav, setFav] = useState(false);

	const handleFavorite = () => {
		let pokemon = props.pokemon;
		if (fav === true) {
			// add fav property from pokemon obj
			setFav(false);
			props.removeFavorite(fav, pokemon);
		} else {
			// remove from pokemon obj
			setFav(true);
			props.addFavorite(fav, pokemon);
		}
	};

	return (
		<Card sx={{ maxWidth: 600 }} raised>
			<CardMedia
				component="img"
				height="300"
				image={props.pokemon.sprites.front_default}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.pokemon.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					ID: {props.pokemon.id} <br /> Height: {props.pokemon.height} <br />{' '}
					Weight: {props.pokemon.weight}
				</Typography>
			</CardContent>
			<CardActions>
				{!fav && (
					<IconButton onClick={handleFavorite}>
						<FavoriteBorderIcon />
					</IconButton>
				)}
				{fav && (
					<IconButton onClick={handleFavorite}>
						<FavoriteIcon />
					</IconButton>
				)}
			</CardActions>
		</Card>
	);
}
