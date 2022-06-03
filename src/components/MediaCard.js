/**
 * @file MediaCard.js
 * @description MUI card that passes props for each pokemon property.
 */

 import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { useState } from 'react';



// TODO: Customize card


export default function MediaCard(props) {

  const [fav, setFav] = useState(false);

   const handleFavorite = () => {
      let pokemon = props.pokemon;
      console.log(`pokemon variable: ${pokemon.name}`)
      if (fav === true) {
        // add fav property from pokemon obj
        setFav(false);
        console.log(`pokemon name ${pokemon.name}`);
        props.addFavorite(fav, pokemon) 
      } else {
        // remove from pokemon obj
        setFav(true);
        console.log(`(false) pokemon name ${pokemon.name}`);
        props.removeFavorite(fav, props.pokemon)
      }
  }

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
          ID: {props.pokemon.id} <br/> Height: {props.pokemon.height} <br/> Weight: {props.pokemon.weight}
        </Typography>
      </CardContent>
      <CardActions>
        {!fav &&
        <IconButton onClick={handleFavorite}>
          <FavoriteBorderIcon/>
        </IconButton>
        }
        {fav &&
        <IconButton onClick={() => { setFav(!fav); handleFavorite()}}>
          <FavoriteIcon/>
        </IconButton>
        }
      </CardActions>
    </Card>
  );
}