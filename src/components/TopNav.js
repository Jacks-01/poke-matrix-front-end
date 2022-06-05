import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';


export default function TopNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#591ba4'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Poke-Matrix
          </Typography>
          <IconButton onClick={() => {window.location.href = 'https://github.com/Jacks-01'}} sx={{color: 'white'}}>
              <GitHub sx={{fontSize: 32}}/>
          </IconButton>
          <Button color="inherit" component={Link} to={'/About'}>About Me</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}