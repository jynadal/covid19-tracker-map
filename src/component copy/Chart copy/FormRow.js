import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
	root: {
        display: 'flex',
		flexWrap: 'wrap',
		maxWidth: '33%',

	},
	// paper: {
	// 	padding: theme.spacing(2),
	// 	margin: 'auto',
	// 	maxWidth: 300,
	// },
	image: {
		width: 128,
		height: 128
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%'
	}
}));

function FormRow() {
	const classes = useStyles();

	const [ results, setResults ] = useState(null);
	const [ searchCountries, setSearchCountries ] = useState('');

	useEffect(() => {
		fetch('https://corona.lmao.ninja/v2/countries')
			.then((response) => response.ok && response.json())
			.then((dataItems) => setResults(dataItems));
		//.catch(error => console.log(error));
	}, []);

	return (
		<div className="FormRow">
			{results &&
				results.map((country, index) => {
					//const lastUpdate = new Date(country.updated).toLocaleDateString();

					return (
						<div className={classes.root}>
							<Paper className={classes.paper}>
								<Grid container  item sm={12} md={4} spacing={2}>
									<Grid item xs={12} sm={4} md={2}>
										<ButtonBase className={classes.image}>
											<img
												className={classes.img}
												alt={'Drapeaux de ' + country.country}
												src={country.flag}
											/>
										</ButtonBase>
									</Grid>
									<Grid item xs={12} sm container>
										<Grid item xs container direction="column" spacing={2}>
											<Grid item xs>
												<Typography gutterBottom variant="subtitle1">
													{country.country}
												</Typography>
												<Typography variant="body2" gutterBottom>
													<p>👨: {country.flag}</p>
												</Typography>
												<Typography variant="body2" color="textSecondary">
													<p>📖: {country.recovered}</p>
												</Typography>
												<Typography variant="body2" gutterBottom>
													<p>🏘️: {country.cases}</p>
												</Typography>
												<Typography variant="body2" color="textSecondary">
													<p>🏘️: {index}</p>
												</Typography>
											</Grid>

											<Grid item>
												<Typography variant="body2" style={{ cursor: 'pointer' }}>
													Remove
												</Typography>
											</Grid>
										</Grid>
										<Grid item>
											<Typography variant="subtitle1">{country.recovered}</Typography>
										</Grid>
									</Grid>
								</Grid>
							</Paper>
						</div>
					);
				})};
		</div>
	);
}

export default FormRow;
