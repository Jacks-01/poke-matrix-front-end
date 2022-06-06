import { Paper, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { Component } from 'react';

class About extends Component {
	componentDidMount = () => {
		document.body.style.backgroundColor = '#c5cae9'
		}
	render() {
		return (
			<Container sx={{ py: 5, display: 'flex', justifyContent: 'center' }}>
				<Paper elevation={10} sx={{ bgcolor: '#e1bee7', width: 700 }}>
					<h1 style={{ display: 'flex', justifyContent: 'center' }}>
						{' '}
						Jack Stubblefield{' '}
					</h1>
					<br />
					<Grid container justifyContent={'center'}>
						<Grid item>
							<img
								src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png"
								alt="me"
								height={500}
							/>
						</Grid>
					</Grid>
					<Container>
						<Paper elevation={4} sx={{ bgcolor: '#f3e5f5', width: 'auto', px: 2, py:2, my: 2 }}>
							I'm a software developer currently studying full-stack development
							at DeltaV Code School. I love working with people and creating
							quality connections in my community. I have 3+ years of experience
							working mental health/ social work and am very passionate about
							making a difference in people's lives. Going forward I am both
							curious and excited to see where tech will take me.
						</Paper>
					</Container>
				</Paper>
			</Container>
		);
	}
}

export default About;
