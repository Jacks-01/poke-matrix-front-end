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



// TODO: Change the alt to a pokemon description. You will have to make changes on the backend too
// TODO: Customize card

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="600"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.id}
        </Typography>
      </CardContent>
    </Card>
  );
}