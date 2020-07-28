import React, { useState, useEffect} from 'react';

import axios from 'axios';
import {Card, Grid, CardHeader, CardContent, Typography, Avatar } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import moment from 'moment/min/moment-with-locales';

//import './ChartList.module.css';
//import styles from  './ChartList.module.css';

// const useStyles = makeStyles((theme) => ({
// 	root: {
//         flexGrow: 1,
// 	},
// 	paper: {
// 		padding: theme.spacing(1),
// 		textAlign: 'center',
// 	},

// }));

const useStyles = makeStyles({
   
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


function ChartList() {

    const classes = useStyles();

    const [data, setData] = useState([]);
    const [searchResults,setSearchResults] = useState([]);
    const [searchField, setSearchField] = useState("");
 // let results;

    const handleChange = evt => setSearchField(evt.target.value);

  


    useEffect(() => {
        const fetchData = async ()=> {
          try{
            const resp= await axios.get('https://corona.lmao.ninja/v2/countries');
            setData(resp.data);
            setSearchResults(resp.data);
        }
         catch(err){
            throw new Error(err);
         }
        };
        fetchData();
      },[]);
    
      useEffect(() =>{
        const results = searchResults.filter(resp =>
           resp.country.toLowerCase().includes(searchField)
        );
        setData(results)
      },[searchField])

    //   useEffect(() =>{
    //     const momentUpdated = moment(country.updated).fromNow();
    //   },[])   
    
    // let momentUpdated(dateupdate) => moment(dateUpdate).fromNow();
    // moment.locale("fr-ch");

    const onChange = (evt) => {
    setSearchField(evt.target.value);
    }
    
    return (
       

        <div className="Chart">
            <h2>Les Charts des Pays avec des Data par pays</h2>
            <h3>Fetch a list from an API and display it</h3>

             <input type='search'
                    className='search'
                    placeholder="Enter a country"
                    value={searchField}
                    onChange={handleChange}
            />
            <Grid container spacing={4}>
                
            
                {data.map((country,index) =>(

                    <Grid item  key={index} xs={12} sm={6} lg={4} >
                        <Card >
                        <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {country.countryInfo.iso2}
                        </Avatar>
                        }
                        title={country.country}
                        subheader={country.updated}
                    />
                          <img
                                //className={classes.img}
                                alt={'Drapeaux de ' + country.country}
                                src={country.countryInfo.flag}
                            />
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Number of the Day are {country.recovered} recovere.
                        </Typography>
                         {moment(country.updated).fromNow()}
                        <Typography variant="h5" component="h2">
                        {country.country}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        👨: {country.deaths}
                        </Typography>
                        <Typography variant="body2" component="p">
                        {country.cases} of cases. 
                        <br />
                        {country.updated}
                        </Typography>
                    </CardContent>
                
                </Card>

               </Grid>

                    )
                   

                    )};
                
          
            </Grid>

                             
                            
               

        </div>


    );
    
};



export default ChartList;