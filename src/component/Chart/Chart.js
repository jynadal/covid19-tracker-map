import React, { useState, useEffect} from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';

//import Form from 'react-bootstrap/Form';
import Form, { Input, Fieldset } from 'react-bootstrap-form';

import styles from  './Chart.module.css';


function Chart() {

    const [results,setResults] = useState(null);
    const [searchCountries, setSearchCountries] = useState("");

    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries')
            .then(response => response.ok && response.json())
            .then(dataItems => setResults(dataItems));
    //.catch(error => console.log(error));    
    }, []);         

    return (
        <div className="Chart">
            <h2>Les Charts des Pays avec des Data par pays</h2>
            <h3>Fetch a list from an API and display it</h3>

            {/* <div className="countries"> */}

                {results && results.map((country, index) => {
                    const lastUpdate = new Date(country.updated).toLocaleDateString();

                return (
                    <div className={styles.container} >

                        <Grid container spacing={1} justify="center" key={index}>

                            <Grid item xs={12} md={3} component={Card} className="country-flag" className={cx(styles.card, styles.deaths)}>

                                <Typography color="textSecondary" gutterBottom>
                                    Drapeau ⛳ {country.flag} personnes ont été guéris dans le monde. 
                                    </Typography>
                            </Grid>

                            <Grid item xs={12} md={3} component={Card} className="country-data" className={cx(styles.chart)}>
                                <CardContent>
                                
                                <Typography variant="h5" component="h2">
                                {country.country}
                                {/* <CountUp start={0} end={globalData.cases} duration={2.75} separator="," /> */}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                <p>👨: {country.deaths}</p>
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                <p>📖: {country.recovered}</p>
                                </Typography>
                                <Typography color="textSecondary">
                                <p>🏘️: {country.cases}</p>
                                </Typography>
                                <Typography color="textSecondary">
                                <p>🏘️: {index}</p>
                                </Typography>

                                <Typography variant="body2" component="p">
                                Nombre de personne ayant contractés la COVID-19.
                                </Typography>
                                </CardContent>
                            </Grid>
                        </Grid> 

                    </div>
                );

                
                })};

            {/* </div> */}




        </div>


    )
    
};


export default Chart;