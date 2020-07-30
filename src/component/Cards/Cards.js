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

const momentDate = moment(globalData.updated).fromNow();
moment.locale('fr-ch');


// const { countUp } = useCountUp({ end: 123456789, delay:1000, separator: "," });

    return (
        
        <div className={styles.container}>
            <Grid container spacing={1} justify="center">
                
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Contaminées aux Covid-19
                    </Typography>
                    <Typography variant="h5" component="h2">                    
                        <CountUp startNum={10799999} endNum={globalData.cases} duration={1} />
                    </Typography>
                    <Typography color="textSecondary">
                        {/* <Moment>{lastUpdated }</Moment>
                        {new Date(globalData.update).toDateString()} */}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Nombre de personne ayant contractés la COVID-19 dans le monde. 
                    </Typography>
                    <Typography variant="body2" component="p">
                        Et <span>{globalData.todayCases}</span> personnes on étaient comptabilisé positifs aux coronavirus aujourd'hui. Les données date: <moment color="textSecondary">{momentDate }</moment> .
                    </Typography>
                    <Typography color="textSecondary">
                        <moment>{momentDate }</moment>
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                        Guéris du Coronavirus
                        </Typography>
                        <Typography variant="h5" component="h2">
                        <CountUp startNum={10699999} endNum={globalData.recovered} duration={1} />
                        </Typography>                        
                        <Typography variant="body2" component="p">
                            Heureusement {globalData.recovered} de personne dans le monde ont gueris du Covid-19. < br /> Mais en attendant un vaccin, prennez grand soin de vous et de vos proches.
                        </Typography>
                        <Typography color="textSecondary">
                        <moment>{momentDate }</moment>
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
                        <CountUp startNum={655555} endNum={globalData.deaths} duration={150} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                        {/* <Moment>{latest.updated}</Moment> */}
                         {/* {new Date(globalData.updated).toDateString()}  */}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Malheureusement {globalData.deaths} décés dû au COVID-19 depuis le debut de la crise.< br /> Aujourd'hui, <span>{globalData.todayDeaths}</span> personnes sont décédés du coronavirus. Toute nos condoléances aux prôches des défunts.
                        </Typography>
                        <Typography color="textSecondary">
                        <moment>{momentDate }</moment>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={12} component={Card} className={cx(styles.card, styles.recovered)}>
                    <Typography color="textSecondary" gutterBottom>
                        Dans tous ça, sachez qu'aujourd'hui, <span>{globalData.todayRecovered}</span> personnes ont été guéris dans le monde. 
                        </Typography>
                 </Grid>


            </Grid>

        </div>
    );
};

export default Cards;