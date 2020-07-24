import React, { useState, useEffect} from 'react';
import FormRow from './FormRow';
import SearchBox from './SearchBox';

import { makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core';

import './ChartList.module.css';
import styles from  './ChartList.module.css';

const useStyles = makeStyles((theme) => ({
	root: {
        flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
	},

}));


function ChartList() {

    const [results,setResults] = useState(null);
    const [searchField, setSearchField] = useState("");

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
                    <SearchBox placeholder="Enter contry name " 
                    handleChange={(evt) => setSearchField(evt.target.value)}
                     />
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



export default ChartList;



//  <Grid  container  spacing={1} justify="left" key={index}>

//                         {/*<Grid className="countryFlag"  >   //spacing={1}  */}

//                             <Grid item xs={12} sm={6} md={3} component={Card} className="country-flag" className={cx(styles.card)}>

//                                 <Typography color="textSecondary" gutterBottom>
//                                     Drapeau ⛳ {country.flag} personnes ont été guéris dans le monde. 
//                                     </Typography>
//                             </Grid>

//                             <Grid item xs={12} sm={6} md={3} component={Card} className="country-data" className={cx(styles.chart)}>
//                                 <CardContent>
                                
//                                 <Typography variant="h5" component="h2">
//                                 {country.country}
//                                 {/* <CountUp start={0} end={globalData.cases} duration={2.75} separator="," /> */}
//                                 </Typography>
//                                 <Typography color="textSecondary" gutterBottom>
//                                 <p>👨: {country.deaths}</p>
//                                 </Typography>
//                                 <Typography color="textSecondary" gutterBottom>
//                                 <p>📖: {country.recovered}</p>
//                                 </Typography>
//                                 <Typography color="textSecondary">
//                                 <p>🏘️: {country.cases}</p>
//                                 </Typography>
//                                 <Typography color="textSecondary">
//                                 <p>🏘️: {index}</p>
//                                 </Typography>

//                                 <Typography variant="body2" component="p">
//                                 Nombre de personne ayant contractés la COVID-19.
//                                 </Typography>
//                                 <Typography color="textSecondary">
//                                 <p>;): {lastUpdate}</p>
//                                 </Typography>

//                                 </CardContent>
//                             </Grid>
//                         </Grid> 
