import React, { useState, useEffect } from 'react';

import axios from 'axios';
import {Card, Grid, CardHeader, CardContent, Typography, Avatar, CardMedia} from '@material-ui/core';
import { makeStyles  } from '@material-ui/core/styles';
import {Paper, InputBase} from '@material-ui/core';
// import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// import HealingIcon from '@material-ui/icons/Healing';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import moment from 'moment/min/moment-with-locales';

import './ChartList.module.css';

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
    svg: {
      display: 'inline-block',
      width: 'auto',
      height: '40px',
    },
    input: {
      marginLeft: theme.spacing('3'),
      flex: 1,
      width:'200px',
      height: '60px',
    },
    iconButton: {
      padding: '160px', alignItems: 'center',
      width: '50px',heigth: '50px',
    },
    avatar: {
      backgroundColor: 'lightRed',
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

        <div className="Chart" style={{backgroundColor:"lightgrey"}}>
            <h2>Le tableau des Pays avec les informations relatives.</h2>
            <h3>React Fetch API with Hooks, Axios and material-ui</h3>

            <Grid container spacing={1} justify="center">
              <Paper component="form" className={classes2.root}>
                <MenuIcon />
              
              <InputBase
                className={classes2.input}
                placeholder="Rechercher un Pays (anglais)"
                inputProps={{ 'aria-label': 'search google maps' }}
                value={searchField}
                onChange={handleChange}
              />
                <SearchIcon />
             
              </Paper>
            </Grid>


            <Grid container spacing={4}  style={{backgroundColor:"lightgrey"}}>
                
            
                {data.map((country,index) =>(

                    <Grid item  key={index} xs={12} sm={6} lg={4} >
                        <Card  style={{backgroundColor:"lightslategrey"}}>
                        <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes2.avatar} style={{backgroundColor:"lightcoral"}}>
                            {country.countryInfo.iso2}
                        </Avatar>
                        }
                        title={country.country}
                        subheader={moment(country.updated).fromNow()}
                    />
        

                    <CardMedia style={{ height:"200px"}} image={country.countryInfo.flag} alt={'Drapeaux de ' + country.country}/>
                    <CardContent>
                        
                        
                        <Typography variant="h5" component="h2">
                        {country.country}
                        </Typography>
                        <br />
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Du début de la crise jusqu'à aujourd'hui, le nombre de personnes guéries est de <span >{country.recovered}</span>.
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        Le nombre de personnes contaminées par le Coronarivus est de   <span>{country.cases}</span>.
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        Le nombre de personnes décédés s'élève à 👨 <span>{country.deaths} </span>.
                        </Typography>
                        <Typography variant="body2" component="p">
                         Prenez soin de vous et de vos proches!
                        </Typography>
                    </CardContent>                
                </Card>
               </Grid>
              )                  
            )}      
           </Grid>

        </div>
    );
    
};



export default ChartList;