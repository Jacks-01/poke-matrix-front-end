/**
 * @file TopNav.js
 * @description component for the app bar at the top of the page. Manages part of the routing to other pages
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { GitHub } from '@mui/icons-material';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from '@mui/material';

export default function TopNav() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ bgcolor: '#591ba4' }}>
				<Toolbar>
					<Typography
						component={Link}
						to={'/'}
						variant="h6"
						sx={{
							flexGrow: 1,
							color: 'white',
							'&.MuiTypography-h6:hover': { color: '#f48fb1' },
						}}
					>
						Poke-Matrix
					</Typography>
					<IconButton
						onClick={() => {
							window.location.href = 'https://github.com/Poke-Matrix';
						}}
						sx={{ color: 'white' }}
					>
						<GitHub sx={{ fontSize: 32 }} />
					</IconButton>
					<Button color="inherit" component={Link} to={'/About'}>
						About Me
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
