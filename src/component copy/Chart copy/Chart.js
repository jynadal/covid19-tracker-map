import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';
//import cx from 'classnames';
import FormRow from './FormRow';

//import Form from 'react-bootstrap/Form';
//import Form, { Input, Fieldset } from 'react-bootstrap-form';

import styles from  './Chart.module.css';

const useStyles = makeStyles((theme) => ({
	root: {
        flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
	},

}));


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

               

                    <div className={styles.container} >
                        <Grid container spacing={1}>
                            <Grid container item md={12} spacing={3}>
                                <Grid item sm={12} md={6}>
                                 <FormRow />
                                </Grid>

                            </Grid>
                        </Grid>
                    
                    </div>
               

        </div>


    )
    
};


export default Chart;