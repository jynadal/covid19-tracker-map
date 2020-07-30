import React, { useState, useEffect} from 'react';

import axios from 'axios';
import {Card, Grid, CardHeader, CardContent, Typography, Avatar, CardMedia } from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import {Paper, InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

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

  const useStyles2 = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      margin: '50px 70px 50px 90px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10, alignItems: 'center',
    },
  }));


function ChartList() {

    const classes = useStyles();
    const classes2 = useStyles2();

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

            <Paper component="form" className={classes.root}>
              <IconButton className={classes.iconButton} aria-label="menu">
                {/* <MenuIcon /> */}
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Chercher le Pays (anglais)"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={searchField}
                onChange={handleChange}
              />
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                {/* <SearchIcon /> */}
              </IconButton>
            </Paper>


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
                    <CardMedia style={{ height:"150px"}} image={country.countryInfo.flag} alt={'Drapeaux de ' + country.country}/>
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