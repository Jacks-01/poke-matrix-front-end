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
			}}
			noValidate
			autoComplete="off"
		>
			<TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={props.handleSearch} />
		</Box>
	);
}
