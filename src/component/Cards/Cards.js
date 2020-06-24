import React, { useState, useEffect} from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
//import Moment from 'react-moment';


function Cards() {

const [globalData, setGlobalData] = useState([]);

// Fetching global Data Deaths, Cases, Recovered
useEffect(() => {
    // fetch()
fetch('https://corona.lmao.ninja/v2/all')
.then(response => response.json())    // one extra step
.then(data => {
    console.warn(data);
    setGlobalData(data);
  console.log(data);
})
.catch(error => console.error(error));

}, []);

// const date = new Date(parseInt(data.updated));
//   const lastUpdated = date.toString();
//   Moment.globalLocale = 'fr';


    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Contaminées
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {globalData.cases}
                        {/* <CountUp start={0} end={globalData.cases} duration={2.75} separator="," /> */}
                    </Typography>
                    <Typography color="textSecondary">
                        {/* <Moment>{lastUpdated }</Moment> */}
                        {/* {new Date(globalData.update).toDateString()} */}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Nombre de personne ayant contractés la COVID-19.
                    </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Guéris
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {globalData.recovered}
                        <CountUp end={globalData.recovered} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                        {/* <Moment>{lastUpdated }</Moment> */}
                        </Typography>
                        <Typography variant="body2" component="p">
                        Nombre de personne gueries du COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Décés
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {/* {globalData.deaths} */}
                        <CountUp end={globalData.recovered} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                        {/* <Moment>{latest.updated}</Moment> */}
                         {new Date(globalData.updated).toDateString()} 
                        </Typography>
                        <Typography variant="body2" component="p">
                        Nombre de décés dû au COVID-19.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={12} component={Card} className={cx(styles.card, styles.deaths)}>
                    <Typography color="textSecondary" gutterBottom>
                        Dans tous ça, sachez qu'aujourd'hui, {globalData.todayRecovered} personnes ont été guéris dans le monde. 
                        </Typography>
                 </Grid>


            </Grid>

        </div>
    );
};

export default Cards;