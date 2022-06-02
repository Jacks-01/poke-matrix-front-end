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



// TODO: Customize card


export default function MediaCard(props) {
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
        <IconButton onClick={props.makeFavorite} disabled={false}>
          <FavoriteIcon/>
        </IconButton>
        <IconButton show='false' onClick={props.removeFavorite}>
          <FavoriteBorderIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}