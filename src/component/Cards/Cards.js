import React, { useState, useEffect} from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
//import {CountUp} from 'react-countup';
//import { countUp } from './Countup';
import CountUp from 'react-countup-light';
import cx from 'classnames';
import styles from './Cards.module.css';
import moment from 'moment/min/moment-with-locales';
//import Moment from 'react-moment';
//import Moment from 'moment';


function Cards() {

const [globalData, setGlobalData] = useState([]);

// Fetching global Data Deaths, Cases, Recovered
useEffect(() => {
    
fetch('https://corona.lmao.ninja/v2/all')
.then(response => response.json())    // one extra step
.then(data => {
    //console.warn(data);
    setGlobalData(data);
  //console.log(data);
})
.catch(error => console.error(error));

}, []);

const momentDate = moment(globalData.updated).fromNow();
moment.locale('fr-ch');


// const { countUp } = useCountUp({ end: 123456789, delay:1000, separator: "," });

    return (
        
        <div className={styles.container}>
            <Grid container spacing={1} justify="center">
                
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Nombre de personnes contaminées.
                    </Typography>
                    <Typography variant="h5" component="h2">                    
                        <CountUp startNum={20406999} endNum={globalData.cases} duration={1000} />
                    </Typography>
                    <Typography color="textSecondary">
                        {/* <Moment>{lastUpdated }</Moment>
                        {new Date(globalData.update).toDateString()} */}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <span>{globalData.todayCases}</span> personnes ont été comptabilisées positives au coronavirus aujourd'hui. Les données datent d' <moment color="textSecondary">{momentDate }</moment> .
                    </Typography>
                    <Typography color="textSecondary">
                        <moment>{momentDate }</moment>
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Nombre de personnes guéries.
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp startNum={15726099} endNum={globalData.recovered} duration={100} />
                        </Typography>                        
                        <Typography variant="body2" component="p">
                            Heureusement {globalData.recovered} personnes dans le monde ont été gueries. < br /> Mais en attendant le vaccin, prenez grand soin de vous et de vos proches!
                        </Typography>
                        <Typography color="textSecondary">
                        <moment>{momentDate }</moment>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Nombre de personnes décédées.
                        </Typography>
                        <Typography variant="h5" component="h2">                    
                        {/* {globalData.deaths} */}
                        <CountUp startNum={779555} endNum={globalData.deaths} duration={150} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                        {/* <Moment>{latest.updated}</Moment> */}
                         {/* {new Date(globalData.updated).toDateString()}  */}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Malheureusement {globalData.deaths} personnes ont succombé depuis le début de la crise.< br /> Aujourd'hui, <span>{globalData.todayDeaths}</span> personnes sont décédées. Toutes nos condoléances à leurs proches.
                        </Typography>
                        <Typography color="textSecondary">
                        <moment>{momentDate }</moment>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={12} component={Card} className={cx(styles.card, styles.recovered)}>
                    <Typography color="textSecondary" gutterBottom>
                        Sachez qu'aujourd'hui, <span>{globalData.todayRecovered}</span> personnes ont été guéries. 
                        </Typography>
                 </Grid>


            </Grid>

        </div>
    );
};

export default Cards;