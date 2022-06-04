/**
 * @file SearchBar.js
 * @description MUI textField component used as the search bar to display a pokemon when submitted.
 */

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar(props) {
	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
				py: 3, px: 100
			}}
			noValidate
			autoComplete="off"
		>
			<TextField id="outlined-basic" label="Search" variant="outlined" onChange={props.handleSearch} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}/>
		</Box>
	);
}
